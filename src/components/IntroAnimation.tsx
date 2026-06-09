'use client';

import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../core';

interface IntroAnimationProps {
  onFinish: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onFinish }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2000);
    const t2 = setTimeout(() => onFinish(), 2000 + 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onFinish]);

  return (
    <Overlay fading={fading}>
      <CoinScene>
        <Coin>
          <CoinFront>
            <CoinAvatar src="/avatar.jpg" alt="FuFu" />
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
    animation: ${overlayFadeOut} 0.7s ease forwards;
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

const CoinAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const CoinBack = styled.div`
  ${coinFaceBase}
  background: #008080;
  border: 4px solid ${theme.lightFont};
  box-shadow: 0 0 32px rgba(241, 222, 198, 0.3);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kiwi Maru', serif;
  font-size: 52px;
  font-weight: 700;
  color: ${theme.lightFont};
`;

export default IntroAnimation;
