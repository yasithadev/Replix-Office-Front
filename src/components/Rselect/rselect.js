import React, { useState, useEffect, useRef,useImperativeHandle } from 'react';
import styles from './select.module.css'; // Import the CSS module
import {bootstrapGrid} from '../comp.properties.js';
import {inputTypo} from '../comp.properties.js';
import {inputColor} from '../comp.properties.js';
import ROption from './roption'; // Import the new ROption component
const CustomSelect = React.forwardRef(({label,labelOnLeft,col,options, onSelectChange, initialValue,children ,required }, ref) => {
  //let selectedValue;
  const [dropUp, setDropUp] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [currentSelectedValue, setCurrentSelectedValue] = useState();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [enableScroll, setEnableScroll] = useState(false);

  const validate = () => {
    console.log("validate get called in rselect");
    if(!currentSelectedValue && required) {
      setValidationMessage(label + " should be selected");
        return false;
    }
    return true;
}
const getValue = () => {
  console.log("get selectedValue",currentSelectedValue);
  return currentSelectedValue;
}
const getLabel = () => {
  return label;
}
useImperativeHandle(ref, () => ({
  getValue,validate,getLabel
}));
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
    if (isOpen) {
      setTimeout(() => {
        setEnableScroll(true);
      }, 200); // matches CSS transition
    } else {
      setEnableScroll(false);
    }
  }, [isOpen]);
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
/*
  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };
*/  
  const handleSelectClick = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const dropdownHeight = 200; // estimated max dropdown height
      const spaceBelow = window.innerHeight - rect.bottom;
      // If space below is insufficient, position dropdown above
      setDropUp(spaceBelow < (rect.top-48));//48 is top menubar height
    }
  
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  setCurrentSelectedValue(option.value);
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
  tabIndex={0}
  onClick={handleSelectClick}
  onKeyDown={(e) => {
    if ((e.key === 'ArrowDown'||e.key === 'Enter')&&(!isOpen)) {
      console.log(" if ((e.key === 'ArrowDown'||e.key === 'Enter')&&(!isOpen)) ");
      handleSelectClick();
    }else if (e.key === "ArrowDown") {
      console.log(" else if (e.key === ArrowDown) ");
      e.preventDefault();
      if (!isOpen) {
        console.log(" else if (e.key === ArrowDown) => if (!isOpen) ");
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        console.log(" else if (e.key === ArrowDown) => else ");
        setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }else if (e.key === "Enter") {
      if (isOpen && highlightedIndex >= 0) {
        handleOptionClick(options[highlightedIndex]);
      } else {
        handleSelectClick(); // toggle dropdown
      }
    }else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }        
  }
}
>
  {selectedOption}
</div>
      <div className={`${styles.selectItems} ${dropUp ? styles.dropUp : ''} ${isOpen ? styles.selectShow : styles.selectHide} ${enableScroll ? styles.enableScroll : ''}`}>
        {options.map((option,index) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={`${option.label === selectedOption ? styles.sameAsSelected : ''} ${highlightedIndex === index ? styles.highlighted : ''}`}
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
  tabIndex={0}
  onClick={handleSelectClick}
  onKeyDown={(e) => {
      if ((e.key === 'ArrowDown'||e.key === 'Enter')&&(!isOpen)) {
        console.log(" if ((e.key === 'ArrowDown'||e.key === 'Enter')&&(!isOpen)) ");
        handleSelectClick();
      }else if (e.key === "ArrowDown") {
        console.log(" else if (e.key === ArrowDown) ");
        e.preventDefault();
        if (!isOpen) {
          console.log(" else if (e.key === ArrowDown) => if (!isOpen) ");
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          console.log(" else if (e.key === ArrowDown) => else ");
          setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      }else if (e.key === "Enter") {
        if (isOpen && highlightedIndex >= 0) {
          handleOptionClick(options[highlightedIndex]);
        } else {
          handleSelectClick(); // toggle dropdown
        }
      }else if (e.key === "Escape") {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }      
    }
  }
>
  {selectedOption}
</div>

      
<div className={`${styles.selectItems} ${dropUp ? styles.dropUp : ''} ${isOpen ? styles.selectShow : styles.selectHide} ${enableScroll ? styles.enableScroll : ''}`}>
        {
          options.map((option,index) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={`${option.label === selectedOption ? styles.sameAsSelected : ''} ${highlightedIndex === index ? styles.highlighted : ''}`}

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
});

export default CustomSelect;