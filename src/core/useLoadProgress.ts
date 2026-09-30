'use client';

import { useEffect, useState } from 'react';

const whenLoaded = (img: HTMLImageElement) =>
  img.complete
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });

const whenWindowLoaded = () =>
  document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }));

/**
 * Fraction (0–1) of the page's initial resources that have finished loading:
 * eager images present on mount, web fonts, and the window load event.
 * Lazy images are skipped since they may never load until scrolled into view.
 */
export const useLoadProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images).filter((img) => img.loading !== 'lazy');
    const tasks = [...images.map(whenLoaded), document.fonts?.ready ?? Promise.resolve(), whenWindowLoaded()];
    let done = 0;
    let cancelled = false;
    tasks.forEach((task) =>
      task.then(() => {
        if (cancelled) return;
        done += 1;
        setProgress(done / tasks.length);
      }),
    );
    return () => {
      cancelled = true;
    };
  }, []);

  return progress;
};
