import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PawTrail from './index';

describe('PawTrail', () => {
  it('渲染 10 個腳印，各自套用 paw-step 動畫且時間錯開', () => {
    const { container } = render(<PawTrail />);
    const paws = container.querySelectorAll('.paw-step');
    expect(paws).toHaveLength(10);

    const delays = Array.from(paws).map((el) => (el as HTMLElement).style.animationDelay);
    // 10 個腳印彼此都要有不一樣的 delay，才會有一步一腳印的錯開效果
    expect(new Set(delays).size).toBe(10);
  });

  it('是純裝飾用途：pointer-events 關閉、有 aria-hidden', () => {
    const { container } = render(<PawTrail />);
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(getComputedStyle(root).pointerEvents).toBe('none');
  });
});
