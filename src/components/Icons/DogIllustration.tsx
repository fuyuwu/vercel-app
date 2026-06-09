import React from 'react';

interface Props {
  size?: number;
  color?: string;
  opacity?: number;
}

const DogIllustration: React.FC<Props> = ({ size = 120, color = 'currentColor', opacity = 1 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 130"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity }}
  >
    {/* 左耳（垂耳） */}
    <path d="M32,28 Q18,20 16,40 Q14,55 28,58 Q34,52 36,42" />
    {/* 右耳（垂耳） */}
    <path d="M82,28 Q96,20 100,40 Q102,55 88,58 Q82,52 80,42" />
    {/* 頭 */}
    <path d="M32,28 Q30,15 46,10 Q60,6 74,10 Q90,15 88,28 Q94,42 88,58 Q82,72 60,74 Q38,72 32,58 Q26,42 32,28Z" />
    {/* 左眼 */}
    <ellipse cx="47" cy="40" rx="5" ry="6" />
    <circle cx="48" cy="39" r="1.5" fill={color} stroke="none" />
    {/* 右眼 */}
    <ellipse cx="73" cy="40" rx="5" ry="6" />
    <circle cx="74" cy="39" r="1.5" fill={color} stroke="none" />
    {/* 鼻子 */}
    <path d="M54,54 Q60,58 66,54 Q63,50 60,50 Q57,50 54,54Z" fill={color} stroke="none" />
    {/* 嘴 */}
    <path d="M60,58 Q55,64 50,62" />
    <path d="M60,58 Q65,64 70,62" />
    {/* 身體 */}
    <path d="M38,72 Q30,85 32,105 Q34,120 60,122 Q86,120 88,105 Q90,85 82,72" />
    {/* 前腳左 */}
    <path d="M42,118 Q40,128 38,126 Q36,128 34,126" />
    {/* 前腳右 */}
    <path d="M78,118 Q80,128 82,126 Q84,128 86,126" />
    {/* 尾巴 */}
    <path d="M86,98 Q102,88 106,72 Q108,58 98,56" />
  </svg>
);

export default DogIllustration;
