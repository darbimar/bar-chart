'use client';
import React, { useState } from 'react';
import styles from './DropdownButton.module.scss';

const DropdownButton: React.FC = () => {
  const options = ['За последний месяц', 'За последние 6 месяцев', 'За последний год'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const filteredOptions = options.filter((option) => option !== selectedOption);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="17"
          viewBox="0 0 28 17"
          fill="none">
          <path d="M26 2L14 14L2 2" stroke="#000AFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {filteredOptions.map((option) => (
            <li className={styles.item} key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
