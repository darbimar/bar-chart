import React from 'react';
import styles from './EarningScale.module.scss';

const EarningScale = () => {
  const scale = [0, 500, 1000, 2000, 5000, 10000];
  return (
    <div className={styles.scale}>
      {scale.map((value: number) => (
        <div key={value}>{value}</div>
      ))}
    </div>
  );
};

export default EarningScale;
