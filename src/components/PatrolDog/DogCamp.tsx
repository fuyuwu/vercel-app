'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PatrolDog from '.';
import PixelSprite from './PixelSprite';
import { DOG_PALETTE, DOGHOUSE, DOGHOUSE_PALETTE, SLEEP_Z } from './sprites';

const SCALE = 2;
const Z_COUNT = 3;
const Z_STAGGER_S = 0.8;

// Smoothness comes from html's scroll-behavior, which already respects reduced motion.
const scrollToTop = () => window.scrollTo({ top: 0 });

// The patrol dog's off-duty spot: lying by its doghouse in light mode, asleep in dark mode.
// Pose switches purely in CSS off <html data-theme>, so there is no hydration flash.
// The doghouse doubles as a back-to-top button.
const DogCamp: React.FC = () => (
  <StyledCamp>
    <StyledDayDog aria-hidden="true">
      <PatrolDog animation="lie" scale={SCALE} flip />
    </StyledDayDog>
    <StyledNightDog aria-hidden="true">
      <StyledZzz>
        {Array.from({ length: Z_COUNT }, (_, i) => (
          <StyledZ key={i} style={{ animationDelay: `${i * Z_STAGGER_S}s` }}>
            <PixelSprite rows={SLEEP_Z} palette={DOG_PALETTE} scale={1} />
          </StyledZ>
        ))}
      </StyledZzz>
      <PatrolDog animation="sleep" scale={SCALE} flip />
    </StyledNightDog>
    <StyledHomeButton type="button" onClick={scrollToTop} aria-label="回到頂端" title="回到頂端">
      <PixelSprite rows={DOGHOUSE} palette={DOGHOUSE_PALETTE} scale={SCALE} />
    </StyledHomeButton>
  </StyledCamp>
);

const floatUp = keyframes`
  0%   { transform: translate(0, 0); opacity: 0; }
  20%  { opacity: 1; }
  100% { transform: translate(-6px, -14px); opacity: 0; }
`;

const StyledCamp = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  color: var(--content-text);
  line-height: 0;
`;

const StyledDayDog = styled.div`
  html[data-theme="dark"] & {
    display: none;
  }
`;

const StyledNightDog = styled.div`
  position: relative;
  display: none;

  html[data-theme="dark"] & {
    display: block;
  }
`;

const StyledHomeButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  position: relative;
  line-height: 0;
  cursor: pointer;
  transition: transform 0.15s steps(2, end);

  /* Reach a 44px tap target without lifting the doghouse off the footer edge */
  &::before {
    content: "";
    position: absolute;
    inset: -6px -2px;
  }

  &:hover {
    transform: translateY(-${SCALE}px);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-main);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Anchored above the head, which is on the left since the dog faces away from the doghouse.
const StyledZzz = styled.div`
  position: absolute;
  left: 4px;
  bottom: 100%;
  width: 12px;
  height: 18px;
`;

const StyledZ = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0;
  animation: ${floatUp} ${Z_COUNT * Z_STAGGER_S}s steps(6, end) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export default DogCamp;
