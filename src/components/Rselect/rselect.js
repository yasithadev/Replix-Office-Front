import React, { useState, useEffect, useRef } from 'react';
import styles from './select.module.css'; // Import the CSS module
import {bootstrapGrid} from '../comp.properties.js';
import {inputTypo} from '../comp.properties.js';
import {inputColor} from '../comp.properties.js';
import ROption from './roption'; // Import the new ROption component
const CustomSelect = ({label,labelOnLeft,col,options, onSelectChange, initialValue,children ,required }) => {
  let selectedValue;
  const [validationMessage, setValidationMessage] = useState("");
  const validate = () => {
    if(!selectedValue && required) {
      setValidationMessage(label + " should be selected");
        return false;
    }
    return true;
}
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
  const extractOptionsFromChildren = () => {

    return React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === ROption) {
        return {
          value: child.props.value,
          label: child.props.children, // The text content of ROption is its label
        };
      }
      return null;
    }).filter(option => option !== null);
  };
  console.log("useEffect options",options);
  if(!options || options.length== 0){
    console.log("if(!options || options.length== 0)");
    options= extractOptionsFromChildren();
  }
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
    selectedValue=option.value;
    if (onSelectChange) {
      onSelectChange(option.value);
    }
  };
  const createlabelOnLeft = (colsForLabel,col)=>{
    // Use the imported 'styles' object to apply classes
    return[
      <div  className={ bootstrapGrid['col-md-' + colsForLabel] + " " + bootstrapGrid['col-sm-12']+ " " + styles.container+ " " + styles.lableContainer}>
                    {label}
                </div>,
    <div className={bootstrapGrid['col-md-'+ col] +" " + bootstrapGrid['col-sm-12']+" "+styles.customSelect}  ref={selectRef}>
      <div className={styles.dropdownParent} >
      <div
        className={`${styles.lableleftSelectSelected} ${isOpen ? styles.selectArrowActive : ''}`}
        onClick={handleSelectClick}
      >
        {selectedOption}
      </div>

      <div className={`${styles.lableOnLeftSelectItems} ${isOpen ? '' : styles.selectHide}`}>
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
      <div className={inputTypo.validationMessage + " " + inputColor.validationMessage}>{validationMessage} &nbsp;</div>
    </div>
    ];
  };

  const createlabelOnTop = (col)=>{
    // Use the imported 'styles' object to apply classes
    return[
    <div className={bootstrapGrid['col-md-'+ col] +" " + bootstrapGrid['col-sm-12']+" "+styles.customSelect}  ref={selectRef}>
      
      <div className={ styles.topLableContainer}>{label}</div>
      <div className={styles.dropdownParent} >
      <div
        className={`${styles.selectSelected} ${isOpen ? styles.selectArrowActive : ''}`}
        onClick={handleSelectClick}
      >
        {selectedOption}
      </div>
      
      <div className={`${styles.selectItems} ${isOpen ? '' : styles.selectHide}`}>
        
        {
          options.map((option) => (
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
    <div className={inputTypo.validationMessage + " " + inputColor.validationMessage}>{validationMessage} &nbsp;</div>
    </div>
    ];
  };
  return createStyledField(labelOnLeft,col);
};

export default CustomSelect;