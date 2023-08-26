import Bar from '../Bar/Bar';
import EarningScale from '../EarningScale/EarningScale';
import styles from './ChartBarField.module.scss';

const ChartBarField = () => {
  return (
    <div className={styles.wrapper}>
      <EarningScale />
      <Bar height={100} />
    </div>
  );
};

export default ChartBarField;
