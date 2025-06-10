import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Input from '../input/Input';
const Email = React.forwardRef((props,ref) => {  
    const inputRef = useRef();  
    const validate = () => {
        let val = inputRef.current?.getValue();
        let isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);

        if(props.required && (val=="")) {
            inputRef.current?.changeValidationMessage(props.label + " can not be empty");
            return false;
        }
        else if(!isEmail){
            inputRef.current?.changeValidationMessage(props.label + " should be in valid format");
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
export default Email;