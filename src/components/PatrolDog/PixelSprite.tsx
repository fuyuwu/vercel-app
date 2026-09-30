import React, { useMemo } from 'react';

export type Palette = Record<string, string>;

interface Props {
  rows: string[];
  palette: Palette;
  /** Rendered size of one sprite pixel, in CSS px */
  scale?: number;
  flip?: boolean;
  className?: string;
}

interface Run {
  x: number;
  y: number;
  w: number;
  fill: string;
}

// Merge horizontal runs of the same colour into one <rect> to keep the DOM small.
const toRuns = (rows: string[], palette: Palette): Run[] => {
  const runs: Run[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const fill = palette[row[x]];
      let w = 1;
      while (x + w < row.length && row[x + w] === row[x]) w++;
      if (fill) runs.push({ x, y, w, fill });
      x += w;
    }
  });
  return runs;
};

const PixelSprite: React.FC<Props> = ({ rows, palette, scale = 4, flip = false, className }) => {
  const runs = useMemo(() => toRuns(rows, palette), [rows, palette]);
  const width = rows[0]?.length ?? 0;
  const height = rows.length;

  return (
    <svg
      className={className}
      width={width * scale}
      height={height * scale}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      {runs.map((r) => (
        <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </svg>
  );
};

export default PixelSprite;
