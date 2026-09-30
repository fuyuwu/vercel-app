'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PatrolDog from '../PatrolDog';
import PixelSprite, { type Palette } from '../PatrolDog/PixelSprite';

const SCALE = 4;

const WALLET_PALETTE: Palette = {
  k: 'currentColor',
  b: '#8B5A2B', // leather
  l: '#A87444', // stitching
  O: '#FF9900', // clasp
};

// 20×12, wide open and completely empty.
const WALLET = [
  'kkkkkkkkkkkkkkkkkkkk',
  'kbbbbbbbbbbbbbbbbbbk',
  'kbllllllllllllllllbk',
  'kbl..............lbk',
  'kbl..............lbk',
  'kbllllllllllllllllbk',
  'kbbbbbbbbbbbbbbbbbbk',
  'kbbbbbbbbbbkkkkbbbbk',
  'kbbbbbbbbbbkOOkbbbbk',
  'kbbbbbbbbbbkkkkbbbbk',
  'kbbbbbbbbbbbbbbbbbbk',
  'kkkkkkkkkkkkkkkkkkkk',
];

const COIN_PALETTE: Palette = { k: 'currentColor', O: '#FF9900', w: '#FFFFFF' };

// 11×5, a coin sprouting wings.
const WINGED_COIN = [
  '....kkk....',
  'wwwkOOOkwww',
  '.wwkOkOkww.',
  '...kOOOk...',
  '....kkk....',
];

// The patrol dog sniffs an empty wallet while the last coin flies away.
const OutOfTokens: React.FC = () => (
  <StyledMask>
    <StyledScene aria-hidden="true">
      <div>
        <PatrolDog animation="inspect" scale={SCALE} />
      </div>
      <StyledWallet>
        <StyledFlyingCoin>
          <PixelSprite rows={WINGED_COIN} palette={COIN_PALETTE} scale={SCALE} />
        </StyledFlyingCoin>
        <PixelSprite rows={WALLET} palette={WALLET_PALETTE} scale={SCALE} />
      </StyledWallet>
    </StyledScene>
    <StyledTitle>Demo 暫停營業中</StyledTitle>
    <StyledText>等錢包回血</StyledText>
  </StyledMask>
);

const flyAway = keyframes`
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { opacity: 1; }
  50%  { transform: translate(12px, -28px); }
  100% { transform: translate(-4px, -64px); opacity: 0; }
`;

const StyledMask = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(2px);
  color: var(--light-font);
  text-align: center;
`;

const StyledScene = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 8px;
  line-height: 0;

  @media screen and (max-width: 480px) {
    transform: scale(0.75);
  }
`;

const StyledWallet = styled.div`
  position: relative;
`;

const StyledFlyingCoin = styled.div`
  position: absolute;
  left: 18px;
  top: 0;
  animation: ${flyAway} 2.4s steps(8, end) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translate(12px, -28px);
  }
`;

const StyledTitle = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const StyledText = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
`;

export default OutOfTokens;
