import { describe, it, expect, afterEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useLoadProgress } from './useLoadProgress';

const addImage = ({ lazy = false } = {}) => {
  const img = document.createElement('img');
  if (lazy) img.loading = 'lazy';
  Object.defineProperty(img, 'complete', { value: false });
  document.body.appendChild(img);
  return img;
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('useLoadProgress', () => {
  it('圖片載入前停在部分進度，載完才到 1', async () => {
    const img = addImage();
    const { result } = renderHook(() => useLoadProgress());

    // fonts + window load resolve right away in jsdom; the image is still pending
    await act(async () => {});
    expect(result.current).toBeCloseTo(2 / 3);

    await act(async () => {
      img.dispatchEvent(new Event('load'));
    });
    expect(result.current).toBe(1);
  });

  it('圖片載入失敗也算完成，避免卡住開場', async () => {
    const img = addImage();
    const { result } = renderHook(() => useLoadProgress());

    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    expect(result.current).toBe(1);
  });

  it('忽略 lazy 圖片，因為它們捲到才會載入', async () => {
    addImage({ lazy: true });
    const { result } = renderHook(() => useLoadProgress());

    await act(async () => {});
    expect(result.current).toBe(1);
  });
});
