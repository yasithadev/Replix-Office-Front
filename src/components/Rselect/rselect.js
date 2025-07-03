import React, { useState, useEffect, useRef } from 'react';
import styles from './select.module.css'; // Import the CSS module
import {bootstrapGrid} from '../comp.properties.js';

const CustomSelect = ({ options, onSelectChange, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState(
    initialValue || (options.length > 0 ? options[0].label : 'Select an option')
  );
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Effect for handling clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    if (onSelectChange) {
      onSelectChange(option.value);
    }
  };

  return (
    // Use the imported 'styles' object to apply classes
    <div className={bootstrapGrid['col-md-4'] +" " + bootstrapGrid['col-sm-12']+" "+styles.customSelect} style={{ width: '400px' }} ref={selectRef}>
      <div
        className={`${styles.selectSelected} ${isOpen ? styles.selectArrowActive : ''}`}
        onClick={handleSelectClick}
      >
        {selectedOption}
      </div>

      <div className={`${styles.selectItems} ${isOpen ? '' : styles.selectHide}`}>
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={option.label === selectedOption ? styles.sameAsSelected : ''}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;