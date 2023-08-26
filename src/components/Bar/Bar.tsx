import React from 'react';
import styles from './Bar.module.scss';

type BarProps = {
  height: number;
};

const Bar: React.FC<BarProps> = ({ height }) => {
  return (
    <div className={styles.bar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height={height}
        viewBox={`0 0 16 ${height}`}
        fill="none">
        <rect width="16" height={height} rx="4" fill="#000AFF" />
      </svg>
      <div className={styles.scale}>100</div>
    </div>
  );
};

export default Bar;
