import Bar from '../Bar/Bar';
import EarningScale from '../EarningScale/EarningScale';
import styles from './ChartBarField.module.scss';
import { Period } from '@/app/page';

type ChartBarProps = {
  periodName: Period;
};

const ChartBarField: React.FC<ChartBarProps> = ({ periodName }) => {
  return (
    <div className={styles.wrapper}>
      <EarningScale />
      <div className={styles.chart}>
        {Object.entries(periodName).map(([period, value]) => (
          <Bar key={period} height={value} dateName={period} />
        ))}
      </div>
    </div>
  );
};

export default ChartBarField;
