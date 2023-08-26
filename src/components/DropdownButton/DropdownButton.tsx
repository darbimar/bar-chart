import React from 'react';
import styles from './DropdownButton.module.scss';

const DropdownButton = () => {
  return (
    <button className={styles.button}>
      За последний месяц
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="17"
        viewBox="0 0 28 17"
        fill="none">
        <path d="M26 2L14 14L2 2" stroke="#000AFF" stroke-width="3" stroke-linecap="round" />
      </svg>
    </button>
  );
};

export default DropdownButton;
