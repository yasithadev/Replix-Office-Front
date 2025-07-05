import React, { useState, useEffect, useRef } from 'react';
import styles from './select.module.css'; // Import the CSS module
import {bootstrapGrid} from '../comp.properties.js';

const CustomSelect = ({labelOnLeft,col,options, onSelectChange, initialValue }) => {

  const createStyledField = (labelOnLeft,col)=>{
    if(labelOnLeft && labelOnLeft == "true"){
      if(col && col == "12"){
        return createlabelOnLeft(2,10)
      }
      else if(col && col == "6"){
        return createlabelOnLeft(2,4)
      }
      else if(col && col == "4"){
        return createlabelOnLeft(1,3)
      }
      else if(col && col == "3"){
        return createlabelOnLeft(1,2);
      }
      else{
        return createlabelOnLeft(2,10)
      }
    }
    else{
      return createlabelOnTop(col);
    }

  }

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
  const createlabelOnLeft = (colsForLabel,col)=>{
    // Use the imported 'styles' object to apply classes
    return[
      <div  className={ bootstrapGrid['col-md-' + colsForLabel] + " " + bootstrapGrid['col-sm-12']+ " " + styles.container+ " " + styles.lableContainer}>
                    Lable
                </div>,
    <div className={bootstrapGrid['col-md-'+ col] +" " + bootstrapGrid['col-sm-12']+" "+styles.customSelect} style={{ width: '400px' }} ref={selectRef}>
      <div
        className={`${styles.lableleftSelectSelected} ${isOpen ? styles.selectArrowActive : ''}`}
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
    ];
  };

  const createlabelOnTop = (col)=>{
    // Use the imported 'styles' object to apply classes
    return[
    <div className={bootstrapGrid['col-md-'+ col] +" " + bootstrapGrid['col-sm-12']+" "+styles.customSelect} style={{ width: '400px' }} ref={selectRef}>
      <div className={ styles.topLableContainer}>lable</div>
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
    ];
  };
  return createStyledField(labelOnLeft,col);
};

export default CustomSelect;