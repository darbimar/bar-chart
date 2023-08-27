import React from 'react';
import { calculateBarHeight } from '@/utils/calcBarHeight';
import styles from './Bar.module.scss';

type BarProps = {
  height: number;
  monthName: string;
};

const Bar: React.FC<BarProps> = ({ height, monthName }) => {
  const barHeight = calculateBarHeight(height);

  return (
    <div className={styles.bar}>
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
