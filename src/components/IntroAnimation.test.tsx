import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import IntroAnimation from './IntroAnimation';

// Every <img> starts unloaded so each test decides when the page "finishes loading".
const completeDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'complete');

const finishLoadingImages = () =>
  act(async () => {
    document.querySelectorAll('img').forEach((img) => img.dispatchEvent(new Event('load')));
  });

const advance = (ms: number) =>
  act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });

// jsdom lacks AnimationEvent, so React listens for the webkit-prefixed name instead.
const finishCoinTurn = (coin: HTMLElement) =>
  act(() => {
    coin.dispatchEvent(new Event('webkitAnimationIteration', { bubbles: true }));
  });

const progress = () => Number(screen.getByRole('progressbar').getAttribute('aria-valuenow'));

const renderIntro = () => {
  const onCoinDone = vi.fn();
  const onExited = vi.fn();
  const utils = render(<IntroAnimation onCoinDone={onCoinDone} onExited={onExited} />);
  const coin = utils.container.querySelector('[aria-label="Skip intro"] > div > div') as HTMLElement;
  return { ...utils, coin, onCoinDone, onExited };
};

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'requestAnimationFrame', 'cancelAnimationFrame', 'performance'] });
  Object.defineProperty(HTMLImageElement.prototype, 'complete', { configurable: true, get: () => false });
});

afterEach(() => {
  vi.useRealTimers();
  if (completeDescriptor) Object.defineProperty(HTMLImageElement.prototype, 'complete', completeDescriptor);
});

describe('IntroAnimation', () => {
  it('資源還沒載完時，就算過了 2 秒狗狗也不會長到 100%', async () => {
    const { onCoinDone } = renderIntro();

    await advance(3000);

    expect(progress()).toBeLessThan(100);
    expect(onCoinDone).not.toHaveBeenCalled();
  });

  it('載完後等硬幣這一圈翻完才進入頁面', async () => {
    const { coin, onCoinDone, onExited } = renderIntro();

    await advance(2500);
    await finishLoadingImages();
    await advance(50);
    expect(progress()).toBe(100);
    expect(onCoinDone).not.toHaveBeenCalled();

    finishCoinTurn(coin);
    expect(onCoinDone).toHaveBeenCalledTimes(1);

    await advance(450);
    expect(onExited).toHaveBeenCalledTimes(1);
  });

  it('網路太慢時最多等 5 秒就直接進入', async () => {
    const { onCoinDone } = renderIntro();

    await advance(5100);

    expect(onCoinDone).toHaveBeenCalledTimes(1);
  });

  it('按任意鍵可以跳過', async () => {
    const { onCoinDone } = renderIntro();

    fireEvent.keyDown(window, { key: 'Enter' });

    expect(onCoinDone).toHaveBeenCalledTimes(1);
  });
});
