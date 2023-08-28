'use client';
import React, { useEffect, useState } from 'react';
import DropdownButton from '../DropdownButton/DropdownButton';
import BarChartField from '../BarChartField/BarChartField';
import { periods } from '@/data';
import styles from './BarChart.module.scss';

export interface Period {
  [key: string]: number;
}

const BarChart = () => {
  const { graph } = periods;
  const { year, half_year, month } = graph;
  const options = ['За последний месяц', 'За последние 6 месяцев', 'За последний год'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [period, setPeriod] = useState<Period>(month);

  useEffect(() => {
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
  }, [selectedOption]);

  return (
    <div className={styles.chart}>
      <DropdownButton
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <BarChartField periodName={period} />
    </div>
  );
};

export default BarChart;
