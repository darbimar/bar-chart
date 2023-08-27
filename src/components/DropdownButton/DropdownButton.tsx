'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './DropdownButton.module.scss';

type DropdownProps = {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  options: string[];
  onChange: () => void;
};

const DropdownButton: React.FC<DropdownProps> = ({
  onChange,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange();
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
          <path
            d={isOpen ? 'M26 15L14 3L2 15' : 'M26 2L14 14L2 2'}
            stroke="#000AFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {options
            .filter((option) => option !== selectedOption)
            .map((option) => (
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
