import React from 'react';

interface Props {
  /** 線條顏色，預設吃當前文字色（currentColor） */
  color?: string;
  /** 整體透明度 */
  opacity?: number;
  /** 單一貼磚（tile）邊長，數字越大越稀疏 */
  tileSize?: number;
  /** 疊加層的 z-index，預設鋪在內容下方 */
  zIndex?: number;
  /** 每個圖案要不要自己動（淡入淡出、輕輕彈跳），預設開 */
  animated?: boolean;
}

const ddKeyframes = `
  .dd-fade, .dd-bounce, .dd-step {
    transform-box: fill-box;
    transform-origin: center;
  }
  @keyframes dd-fade   { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
  @keyframes dd-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  @keyframes dd-step   { 0%, 100% { opacity: 0.25; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1); } }

  .dd-fade   { animation: dd-fade 3.6s ease-in-out infinite; }
  .dd-bounce { animation: dd-bounce 2.3s ease-in-out infinite; }
  .dd-step   { animation: dd-step 3s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .dd-fade, .dd-bounce, .dd-step { animation: none !important; }
  }
`;

/** 動物腳掌：一顆大肉球 + 三顆腳趾（實心剪影），半徑約 15.5 個單位 */
const Paw: React.FC = () => (
  <g fill="currentColor" stroke="none">
    <ellipse cx="0" cy="6" rx="7" ry="6" />
    <ellipse cx="-7" cy="-6" rx="2.6" ry="3.2" />
    <ellipse cx="-1" cy="-9" rx="2.6" ry="3.2" />
    <ellipse cx="6" cy="-8" rx="2.6" ry="3.2" />
  </g>
);

/** 小狗頭線稿：垂耳、圓潤臉型，半徑約 35 個單位（含耳朵） */
const DogHead: React.FC = () => (
  <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-18,-6 Q-30,-14 -32,0 Q-34,10 -22,13 Q-18,7 -16,-2" />
    <path d="M18,-6 Q30,-14 32,0 Q34,10 22,13 Q18,7 16,-2" />
    <path d="M-18,-6 Q-20,-18 -6,-22 Q6,-25 18,-22 Q30,-18 28,-6 Q32,6 28,17 Q22,27 0,28 Q-22,27 -28,17 Q-32,6 -28,-6 Q-24,-14 -18,-6Z" />
    <circle cx="-9" cy="-2" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="9" cy="-2" r="1.6" fill="currentColor" stroke="none" />
    <path d="M-3,16 Q0,19 3,16" />
  </g>
);

/** 小貓頭線稿：尖耳、鬍鬚，半徑約 36 個單位（含耳朵） */
const CatHead: React.FC = () => (
  <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-13,-15 L-22,-28 L-5,-19" />
    <path d="M13,-15 L22,-28 L5,-19" />
    <path d="M-13,-15 Q-22,-4 -18,8 Q-12,19 0,19 Q12,19 18,8 Q22,-4 13,-15 Q6,-22 0,-23 Q-6,-22 -13,-15Z" />
    <circle cx="-7" cy="-2" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="7" cy="-2" r="1.4" fill="currentColor" stroke="none" />
    <path d="M-2,8 L2,8 L0,11Z" fill="currentColor" stroke="none" />
    <path d="M-18,4 L-8,6" />
    <path d="M18,4 L8,6" />
  </g>
);

/**
 * 每個圖案的位置都跟貼磚邊界保持足夠緩衝（半徑 × scale 再多留一截），
 * 不管 patternTransform 怎麼轉，剪影都不會被相鄰貼磚的邊界切到、破格。
 * 貼磚拉大到 260，加上總數維持 5 個，整體看起來才不會太密集。
 */
const MOTIFS = [
  { Shape: Paw, x: 55, y: 65, rotate: -18, scale: 0.9, cls: 'dd-fade', delay: '0s' },
  { Shape: Paw, x: 205, y: 60, rotate: 20, scale: 0.55, cls: 'dd-step', delay: '0.5s' },
  { Shape: DogHead, x: 95, y: 190, rotate: -8, scale: 0.5, cls: 'dd-fade', delay: '0.9s' },
  { Shape: CatHead, x: 215, y: 175, rotate: 10, scale: 0.45, cls: 'dd-bounce', delay: '0.4s' },
  { Shape: Paw, x: 30, y: 235, rotate: 40, scale: 0.4, cls: 'dd-step', delay: '1.6s' },
];

/**
 * 可愛手繪風背景 —— 鋪動物掌印跟小狗、小貓的線稿頭像，
 * 走跟 DogIllustration / CatIllustration 一致的圓潤線稿風格。
 * 每個圖案外層負責定位（SVG transform 屬性），內層負責動畫（CSS transform/opacity），
 * 兩者分開才不會互相蓋掉——動畫都繞自己的中心跑，不會整組跳位。
 * 純裝飾用途：pointer-events 關閉，絕對定位鋪滿父層，父層需自行設定 position: relative。
 */
const DoodleBackground: React.FC<Props> = ({
  color = 'currentColor',
  opacity = 0.08,
  tileSize = 260,
  zIndex = 0,
  animated = true,
}) => {
  const patternId = React.useId().replace(/[:]/g, '');

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        color,
        opacity,
        zIndex,
        pointerEvents: 'none',
      }}
    >
      {animated && <style>{ddKeyframes}</style>}
      <defs>
        <pattern
          id={patternId}
          width={tileSize}
          height={tileSize}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-6)"
        >
          {MOTIFS.map(({ Shape, x, y, rotate, scale, cls, delay }, i) => (
            <g key={i} transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`}>
              <g className={animated ? cls : undefined} style={animated ? { animationDelay: delay } : undefined}>
                <Shape />
              </g>
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default DoodleBackground;
