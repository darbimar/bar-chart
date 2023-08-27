import React, { useState } from 'react';
import { calculateBarHeight } from '@/utils/calcBarHeight';
import styles from './Bar.module.scss';

type BarProps = {
  height: number;
  monthName: string;
};

const Bar: React.FC<BarProps> = ({ height, monthName }) => {
  const [activeBar, setActiveBar] = useState<number | null>(null);

  const barHeight = calculateBarHeight(height);

  const handleMouseEnter = () => {
    setActiveBar(height);
  };

  const handleMouseLeave = () => {
    setActiveBar(null);
  };

  return (
    <div className={styles.bar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.caption}>{activeBar}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height={barHeight}
        viewBox={`0 0 16 ${barHeight}`}
        fill="none">
        <rect width="16" height={barHeight} rx="4" fill="#000AFF" />
        <animate attributeName="height" from="0" to={barHeight} dur="0.8s" begin="0s" />
      </svg>
      <div className={styles.scale}>{monthName}</div>
    </div>
  );
};

export default Bar;
