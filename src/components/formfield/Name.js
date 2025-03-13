import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Input from '../input/Input';
const Name = React.forwardRef((props,ref) => {  
    const inputRef = useRef();  
    const validate = () => {
        let val = inputRef.current?.getValue();
        let hasNumbers = /\d/.test(val);
        //let msg = 
        if(hasNumbers){
            inputRef.current?.changeValidationMessage(props.label + " can not contain numers");
            return false;
        }else{
            inputRef.current?.changeValidationMessage("");
        }
        return true;
    }

    const getValue = () => {
        return inputRef.current?.getValue();
    }
    const getLabel = () => {
        return props.label;
    }
    useImperativeHandle(ref, () => ({
        getValue,validate,getLabel
    }));
    return(
        <Input ref={inputRef} label={props.label} ></Input>
    );
});
export default Name;