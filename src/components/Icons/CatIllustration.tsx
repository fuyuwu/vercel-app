import React from 'react';

interface Props {
  size?: number;
  color?: string;
  opacity?: number;
}

const CatIllustration: React.FC<Props> = ({ size = 120, color = 'currentColor', opacity = 1 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 110 140"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity }}
  >
    {/* 左耳 */}
    <path d="M30,35 L20,12 L44,28" />
    {/* 右耳 */}
    <path d="M76,35 L88,12 L66,28" />
    {/* 頭 */}
    <path d="M30,35 Q18,50 22,65 Q30,82 55,82 Q80,82 88,65 Q92,50 80,35 Q68,20 55,18 Q42,20 30,35Z" />
    {/* 左眼（杏仁形） */}
    <path d="M38,50 Q44,45 50,50 Q44,55 38,50Z" />
    <circle cx="44" cy="50" r="2" fill={color} stroke="none" />
    {/* 右眼（杏仁形） */}
    <path d="M60,50 Q66,45 72,50 Q66,55 60,50Z" />
    <circle cx="66" cy="50" r="2" fill={color} stroke="none" />
    {/* 鼻子 */}
    <path d="M52,63 L55,66 L58,63 Q55,60 52,63Z" fill={color} stroke="none" />
    {/* 嘴 */}
    <path d="M55,66 Q50,70 48,68" />
    <path d="M55,66 Q60,70 62,68" />
    {/* 鬍鬚左 */}
    <path d="M20,60 L40,63" />
    <path d="M20,66 L40,67" />
    {/* 鬍鬚右 */}
    <path d="M90,60 L70,63" />
    <path d="M90,66 L70,67" />
    {/* 身體 */}
    <path d="M28,80 Q22,100 25,118 Q35,132 55,133 Q75,132 85,118 Q88,100 82,80" />
    {/* 前腳左 */}
    <path d="M32,128 Q30,136 27,134 Q25,136 23,134" />
    {/* 前腳右 */}
    <path d="M78,128 Q80,136 83,134 Q85,136 87,134" />
    {/* 尾巴（往上捲） */}
    <path d="M80,112 Q98,100 100,82 Q102,64 88,62 Q80,64 82,78" />
  </svg>
);

export default CatIllustration;
