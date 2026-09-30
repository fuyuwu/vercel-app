'use client';

import React, { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import PixelSprite from './PixelSprite';
import { DOG_FRAMES, DOG_PALETTE, stretchDog, type DogFrame } from './sprites';

export type DogAnimation = 'idle' | 'walk' | 'inspect' | 'salute' | 'lie' | 'sleep';

const ANIMATIONS: Record<DogAnimation, { frames: DogFrame[]; ms: number }> = {
  idle: { frames: ['idle1', 'idle2'], ms: 350 },
  walk: { frames: ['walk1', 'walk2'], ms: 180 },
  inspect: { frames: ['sniff1', 'sniff2'], ms: 260 },
  salute: { frames: ['salute'], ms: 1000 },
  // Slow, lazy tail wag
  lie: { frames: ['lie1', 'lie1', 'lie1', 'lie2', 'lie1', 'lie2'], ms: 300 },
  sleep: { frames: ['sleep'], ms: 1000 },
};

interface Props {
  animation?: DogAnimation;
  /** Extra torso columns; each one makes the dachshund one pixel longer */
  stretch?: number;
  scale?: number;
  flip?: boolean;
  className?: string;
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

const PatrolDog: React.FC<Props> = ({ animation = 'idle', stretch = 0, scale = 4, flip, className }) => {
  const reducedMotion = usePrefersReducedMotion();
  // Tick is tagged with its animation so switching animations restarts at frame 0.
  const [tick, setTick] = useState({ animation, count: 0 });
  const { frames, ms } = ANIMATIONS[animation];

  useEffect(() => {
    if (reducedMotion || frames.length < 2) return;
    const id = setInterval(
      () => setTick((t) => (t.animation === animation ? { animation, count: t.count + 1 } : { animation, count: 1 })),
      ms,
    );
    return () => clearInterval(id);
  }, [animation, frames, ms, reducedMotion]);

  const count = tick.animation === animation && !reducedMotion ? tick.count : 0;
  const frame = frames[count % frames.length];
  const rows = useMemo(() => stretchDog(DOG_FRAMES[frame], stretch), [frame, stretch]);

  return (
    <PixelSprite
      rows={rows}
      palette={DOG_PALETTE}
      scale={scale}
      flip={flip}
      className={className}
    />
  );
};

export default PatrolDog;
