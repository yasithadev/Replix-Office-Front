import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Input from '../input/Input';
const Name = React.forwardRef((props,ref) => {  
    const inputRef = useRef();  
    const validate = () => {
        let val = inputRef.current?.getValue();
        let hasNumbers = /\d/.test(val);

        if(props.required && (val=="")) {
            inputRef.current?.changeValidationMessage(props.label + " can not be empty");
            return false;
        }
        else if(hasNumbers){
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
    const inputKeyPressed = (event)=> {
        if(event.key=="Enter"){
            console.log(event);
            props.validateAndSubmit();
        }
    }
    return(
        <Input required={props.required ? true:false} keypressParentCallback={inputKeyPressed} ref={inputRef} col={props.col} label={props.label} ></Input>
    );
});
export default Name;