'use client';
import ChartBarField from '@/components/ChartBarField/ChartBarField';
import DropdownButton from '@/components/DropdownButton/DropdownButton';
import styles from './page.module.css';
import { useCallback, useEffect, useState } from 'react';
import { periods } from '@/data';

export interface Period {
  [key: string]: number;
}

export default function Home() {
  const { graph } = periods;
  const { year, half_year, month } = graph;
  const options = ['За последний месяц', 'За последние 6 месяцев', 'За последний год'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [period, setPeriod] = useState<Period>(month);

  const handleOptionChange = () => {
    switch (selectedOption) {
      case options[0]:
        setPeriod(month);
        break;
      case options[1]:
        setPeriod(half_year);
        break;
      case options[2]:
        setPeriod(year);
        break;
    }
  };

  useEffect(() => {
    handleOptionChange();
  }, [selectedOption]);

  return (
    <main className={styles.container}>
      <div className={styles.chart}>
        <DropdownButton
          onChange={handleOptionChange}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <ChartBarField periodName={period} />
      </div>
    </main>
  );
}
