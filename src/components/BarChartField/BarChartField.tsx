import Bar from '../Bar/Bar';
import { Period } from '../BarChart/BarChart';
import EarningScale from '../EarningScale/EarningScale';
import styles from './BarChartField.module.scss';

type BarChartProps = {
  periodName: Period;
};

const BarChartField: React.FC<BarChartProps> = ({ periodName }) => {
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

export default BarChartField;
