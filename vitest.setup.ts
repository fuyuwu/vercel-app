import { vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// 每個測試跑完自動把上一次 render 的 DOM 清掉，避免下一個測試撈到殘留節點
afterEach(() => {
  cleanup();
});

// jsdom 沒有實作 IntersectionObserver，Reveal 元件靠它偵測捲動進畫面，
// 測試環境用一個可控的假實作取代，讓測試可以手動觸發 callback。
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(private callback: IntersectionObserverCallback) {}
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = (): IntersectionObserverEntry[] => [];
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
