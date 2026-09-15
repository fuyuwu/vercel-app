'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface Props {
  /** 動畫延遲（ms），做進場的錯開節奏 */
  delay?: number;
  /**
   * 受控模式：直接由外部 state 決定是否播放（例如等 IntroAnimation 結束）。
   * 不傳的話走內建 IntersectionObserver，捲動進畫面才觸發。
   */
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * 進場動畫包裝元件：淡入 + 輕微上移。
 * - 有傳 `active`：跟著外部狀態播放一次（用在 Hero，等 IntroAnimation 蓋板收掉才開始）。
 * - 沒傳 `active`：用 IntersectionObserver 偵測捲動進畫面時觸發一次。
 */
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
