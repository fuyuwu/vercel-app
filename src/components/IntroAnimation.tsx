'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../core';

interface IntroAnimationProps {
  /** Fires as soon as the coin flip ends, before the overlay fade-out finishes */
  onCoinDone: () => void;
  /** Fires after the overlay has fully faded out, so it can be unmounted */
  onExited: () => void;
}

const FADE_MS = 450;

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onCoinDone, onExited }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      onCoinDone();
      setFading(true);
    }, 2000);
    const t2 = setTimeout(() => onExited(), 2000 + FADE_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onCoinDone, onExited]);

  return (
    <Overlay fading={fading}>
      <CoinScene>
        <Coin>
          <CoinFront>
            <CoinAvatar src="/avatar.jpg" alt="FuFu" fill sizes="160px" priority />
          </CoinFront>
          <CoinBack>Fu</CoinBack>
        </Coin>
      </CoinScene>
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
  align-items: center;
  justify-content: center;

  ${({ fading }) => fading && css`
    pointer-events: none;
    animation: ${overlayFadeOut} ${FADE_MS}ms ease forwards;
  `}
`;

const CoinScene = styled.div`
  width: 160px;
  height: 160px;
  perspective: 700px;
`;

const Coin = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${coinSpin} 2s linear 1;
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
