import BarChart from '@/components/BarChart/BarChart';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <BarChart />
    </main>
  );
}
