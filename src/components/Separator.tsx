import React from 'react';

interface SeparatorProps {
  color?: string;
  dashLength?: number;
  gapLength?: number;
  thickness?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  color = 'rgba(255,255,255,0.2)',
  dashLength = 4,
  gapLength = 4,
  thickness = 4,
}) => (
  <svg
    width="100%"
    height={thickness}
    style={{
      display: 'block',
      margin: '32px 0',
      overflow: 'visible',
      opacity: 0.2,
    }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <line
      x1="0"
      y1={thickness / 2}
      x2="100%"
      y2={thickness / 2}
      stroke={color}
      strokeWidth={thickness}
      strokeDasharray={`${dashLength},${gapLength}`}
      strokeLinecap="butt" // kare uçlar
      shapeRendering="crispEdges" // pikselleri sabitle
      vectorEffect="non-scaling-stroke" // ölçeklenince kalınlik ve dash’lar bozulmasın
    />
  </svg>
);

export default Separator;
