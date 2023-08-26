import Image from 'next/image';
import styles from './page.module.css';
import ChartBarField from '@/components/ChartBarField/ChartBarField';
import DropdownButton from '@/components/DropdownButton/DropdownButton';

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
