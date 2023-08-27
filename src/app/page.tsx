import ChartBarField from '@/components/ChartBarField/ChartBarField';
import DropdownButton from '@/components/DropdownButton/DropdownButton';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.chart}>
        <DropdownButton />
        <ChartBarField />
      </div>
    </main>
  );
}
