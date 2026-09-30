'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../core';
import { useLoadProgress } from '../core/useLoadProgress';
import PatrolDog from './PatrolDog';

interface IntroAnimationProps {
  /** Fires when the overlay starts fading out, so the page can begin revealing */
  onCoinDone: () => void;
  /** Fires after the overlay has fully faded out, so it can be unmounted */
  onExited: () => void;
}

const COIN_MS = 2000;
// Never keep visitors on the intro longer than this, however slow the network
const MAX_WAIT_MS = 5000;
const FADE_MS = 450;
const DOG_SCALE = 4;
const DOG_BASE_WIDTH = 32;
// How many pixels the dachshund grows between 0% and 100%
const DOG_MAX_STRETCH = 40;

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onCoinDone, onExited }) => {
  const [stretch, setStretch] = useState(0);
  const [fading, setFading] = useState(false);
  const loadProgress = useLoadProgress();
  const loadProgressRef = useRef(loadProgress);
  useEffect(() => {
    loadProgressRef.current = loadProgress;
  }, [loadProgress]);

  // Keep the latest callbacks without restarting the timeline when the parent re-renders.
  const callbacks = useRef({ onCoinDone, onExited });
  useEffect(() => {
    callbacks.current = { onCoinDone, onExited };
  }, [onCoinDone, onExited]);

  const fadeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const exiting = useRef(false);

  const exit = useCallback(() => {
    if (exiting.current) return;
    exiting.current = true;
    setStretch(DOG_MAX_STRETCH);
    callbacks.current.onCoinDone();
    setFading(true);
    fadeTimer.current = setTimeout(() => callbacks.current.onExited(), FADE_MS);
  }, []);

  // The dog's length is the loading bar. It follows real resource loading but
  // never outpaces one coin turn, so fast loads still get a full flip.
  useEffect(() => {
    let raf = 0;
    let shown = 0;
    const start = performance.now();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = (now: number) => {
      if (exiting.current) return;
      const elapsed = now - start;
      const target = elapsed >= MAX_WAIT_MS ? 1 : Math.min(elapsed / COIN_MS, loadProgressRef.current);
      shown = Math.max(shown, target);
      setStretch(Math.round(shown * DOG_MAX_STRETCH));
      if (shown < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // Otherwise onAnimationIteration exits once the current coin turn lands.
      if (reducedMotion || elapsed >= MAX_WAIT_MS) exit();
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('keydown', exit);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer.current);
      window.removeEventListener('keydown', exit);
    };
  }, [exit]);

  // Each coin turn lasts COIN_MS, so by the first iteration the minimum time has passed.
  const onCoinTurn = useCallback(() => {
    if (loadProgressRef.current >= 1) exit();
  }, [exit]);

  const percent = Math.round((stretch / DOG_MAX_STRETCH) * 100);

  return (
    <Overlay fading={fading} onClick={exit} aria-label="Skip intro">
      <CoinScene>
        <Coin $paused={fading} onAnimationIteration={onCoinTurn}>
          <CoinFront>
            <CoinAvatar src="/avatar.jpg" alt="FuFu" fill sizes="160px" priority />
          </CoinFront>
          <CoinBack>Fu</CoinBack>
        </Coin>
      </CoinScene>
      <DogTrack role="progressbar" aria-label="Loading" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
        <PatrolDog animation={fading ? 'idle' : 'walk'} stretch={stretch} scale={DOG_SCALE} />
      </DogTrack>
    </Overlay>
  );
};

/* ─── Keyframes ─── */

const coinSpin = keyframes`
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
`;

const overlayFadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

/* ─── Styled ─── */

const Overlay = styled.div<{ fading: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: ${theme.darkFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  cursor: pointer;

  ${({ fading }) => fading && css`
    pointer-events: none;
    animation: ${overlayFadeOut} ${FADE_MS}ms ease forwards;
  `}
`;

// Fixed width of a fully grown dog, so the tail stays put and the head runs right.
const DogTrack = styled.div`
  width: ${(DOG_BASE_WIDTH + DOG_MAX_STRETCH) * DOG_SCALE}px;
  max-width: 100%;
  color: ${theme.lightFont};
  line-height: 0;
`;

const CoinScene = styled.div`
  width: 160px;
  height: 160px;
  perspective: 700px;
`;

const Coin = styled.div<{ $paused: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${coinSpin} ${COIN_MS}ms linear infinite;
  animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const coinFaceBase = css`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const CoinFront = styled.div`
  ${coinFaceBase}
  overflow: hidden;
  border: 4px solid ${theme.lightFont};
  box-shadow: 0 0 32px rgba(241, 222, 198, 0.3);
  transform: rotateY(0deg);
`;

const CoinAvatar = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;

const CoinBack = styled.div`
  ${coinFaceBase}
  background: var(--hero-teal);
  border: 4px solid ${theme.lightFont};
  box-shadow: 0 0 32px rgba(241, 222, 198, 0.3);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-kiwi-maru), serif;
  font-size: 52px;
  font-weight: 700;
  color: ${theme.lightFont};
`;

export default IntroAnimation;
