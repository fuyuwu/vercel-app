'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface Props {
  delay?: number;
  /** Controlled mode: play when this flips true. Omit to use IntersectionObserver instead. */
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Fade-up entrance wrapper. Controlled via `active` (e.g. Hero, gated on
// IntroAnimation finishing) or, if omitted, via IntersectionObserver.
const Reveal: React.FC<Props> = ({ delay = 0, active, className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const controlled = active !== undefined;

  useEffect(() => {
    if (controlled) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [controlled]);

  const visible = controlled ? Boolean(active) : inView;

  return (
    <Wrapper ref={ref} visible={visible} delay={delay} className={className}>
      {children}
    </Wrapper>
  );
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div<{ visible: boolean; delay: number }>`
  opacity: 0;

  ${({ visible, delay }) =>
    visible &&
    css`
      animation: ${fadeUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`;

export default Reveal;
