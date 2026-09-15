import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Reveal from './index';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Reveal（受控模式，active prop）', () => {
  it('不管 active 是什麼，children 都會渲染出來', () => {
    render(
      <Reveal active={false}>
        <p>hello</p>
      </Reveal>,
    );
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('active 從 false 變 true，套用的 style class 會跟著變（代表動畫真的被觸發套用）', () => {
    const { container: inactive } = render(
      <Reveal active={false}>
        <p>hidden</p>
      </Reveal>,
    );
    const { container: active } = render(
      <Reveal active={true}>
        <p>shown</p>
      </Reveal>,
    );
    const inactiveWrapper = inactive.firstElementChild as HTMLElement;
    const activeWrapper = active.firstElementChild as HTMLElement;
    expect(activeWrapper.className).not.toBe(inactiveWrapper.className);
  });
});

describe('Reveal（未受控模式，靠 IntersectionObserver）', () => {
  it('捲動進畫面（isIntersecting）後才套用動畫', () => {
    let capturedCallback: IntersectionObserverCallback | null = null;
    const observe = vi.fn();

    class CapturingObserver implements IntersectionObserver {
      readonly root = null;
      readonly rootMargin = '';
      readonly thresholds: ReadonlyArray<number> = [];
      constructor(cb: IntersectionObserverCallback) {
        capturedCallback = cb;
      }
      observe = observe;
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = () => [];
    }
    vi.stubGlobal('IntersectionObserver', CapturingObserver);

    const { container } = render(
      <Reveal>
        <p>scroll me</p>
      </Reveal>,
    );
    const wrapper = container.firstElementChild as HTMLElement;
    const classNameBeforeInView = wrapper.className;

    expect(observe).toHaveBeenCalledTimes(1);

    // 模擬 IntersectionObserver 通知「進畫面了」
    const entry: IntersectionObserverEntry = {
      isIntersecting: true,
      target: wrapper,
      boundingClientRect: wrapper.getBoundingClientRect(),
      intersectionRatio: 1,
      intersectionRect: wrapper.getBoundingClientRect(),
      rootBounds: null,
      time: 0,
    };
    act(() => {
      capturedCallback!([entry], {} as IntersectionObserver);
    });

    expect(wrapper.className).not.toBe(classNameBeforeInView);
  });
});
