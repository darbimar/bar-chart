import { periods } from '@/data';
import Bar from '../Bar/Bar';
import EarningScale from '../EarningScale/EarningScale';
import styles from './ChartBarField.module.scss';

const ChartBarField = () => {
  const { graph } = periods;
  const { year, half_year, month } = graph;

  return (
    <div className={styles.wrapper}>
      <EarningScale />
      <div className={styles.chart}>
        {Object.entries(month).map(([period, value]) => (
          <Bar key={period} height={value} monthName={period} />
        ))}
      </div>
    </div>
  );
};

export default ChartBarField;
