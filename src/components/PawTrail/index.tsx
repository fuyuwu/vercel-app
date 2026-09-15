import React from 'react';

interface Props {
  /** 腳印顏色 */
  color?: string;
  /** 整體透明度 */
  opacity?: number;
}

/**
 * 一串腳印左右交錯往右走。每個腳印是獨立的小 svg（自己的 viewBox 留好邊界），
 * 用 left / bottom 百分比定位，不靠拉伸或裁切（slice）鋪版，
 * 不管容器多寬多窄，掌印本身的形狀都不會被切到、破格。
 */
const STEPS = [
  { left: '3%', bottom: '18%', rotate: -14 },
  { left: '13%', bottom: '55%', rotate: 12 },
  { left: '23%', bottom: '14%', rotate: -18 },
  { left: '33%', bottom: '52%', rotate: 14 },
  { left: '43%', bottom: '16%', rotate: -14 },
  { left: '53%', bottom: '54%', rotate: 16 },
  { left: '63%', bottom: '18%', rotate: -12 },
  { left: '73%', bottom: '52%', rotate: 14 },
  { left: '83%', bottom: '15%', rotate: -16 },
  { left: '92%', bottom: '56%', rotate: 12 },
];

const STEP_INTERVAL = 0.32;
const LOOP_DURATION = STEPS.length * STEP_INTERVAL + 1.2;

/**
 * 首頁 Hero 專用的「一步一腳印」動畫：狗掌印沿著底部走出來，
 * 每個腳印錯開時間淡入放大、停留一下再淡出，無限循環營造走路感。
 * 純裝飾用途：pointer-events 關閉，需放在 position: relative 的父層裡。
 */
const PawTrail: React.FC<Props> = ({ color = 'var(--light-font)', opacity = 0.28 }) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      inset: 0,
      color,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    <style>{`
      @keyframes paw-step {
        0%, 8%   { opacity: 0; transform: scale(0.5); }
        18%      { opacity: 1; transform: scale(1.08); }
        30%, 75% { opacity: 1; transform: scale(1); }
        90%, 100% { opacity: 0; transform: scale(0.85); }
      }
      .paw-step {
        transform-box: fill-box;
        transform-origin: center;
        opacity: 0;
        animation: paw-step ${LOOP_DURATION}s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .paw-step { animation: none; opacity: 0.7; }
      }
    `}</style>
    {STEPS.map((step, i) => (
      <svg
        key={i}
        viewBox="-18 -18 36 36"
        width="25"
        height="25"
        fill="currentColor"
        style={{
          position: 'absolute',
          left: step.left,
          bottom: step.bottom,
          opacity,
        }}
      >
        <g transform={`rotate(${step.rotate})`}>
          <g className="paw-step" style={{ animationDelay: `${i * STEP_INTERVAL}s` }}>
            <ellipse cx="0" cy="6" rx="7" ry="6" />
            <ellipse cx="-7" cy="-6" rx="2.6" ry="3.2" />
            <ellipse cx="-1" cy="-9" rx="2.6" ry="3.2" />
            <ellipse cx="6" cy="-8" rx="2.6" ry="3.2" />
          </g>
        </g>
      </svg>
    ))}
  </div>
);

export default PawTrail;
