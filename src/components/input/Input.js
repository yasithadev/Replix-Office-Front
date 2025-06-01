import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {inputShape} from '../comp.properties.js';
import {inputTypo} from '../comp.properties.js';
import {inputColor} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';
import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
//import console = require('console');


const Input = React.forwardRef((props,ref) => {   
    const [validationMessage, setValidationMessage] = useState(""); 
    const [inputValue, setInputValue] = useState(""); 
    const changeValidationMessage = (msg) => {
        setValidationMessage(msg);
    }    
    const getValue = () => {
        return inputValue;
    }

    useImperativeHandle(ref, () => ({
        getValue,changeValidationMessage
    }));
    const createStyledField = (labelOnLeft,col)=>{
        //console.log("createStyledField col " + col);
        if(col && col == "12"){
            if(labelOnLeft && labelOnLeft == "true"){
                if(props.longLabels && props.longLabels == "true"){
                    return createlabelOnLeft(3,9);
                }
                else{
                    return createlabelOnLeft(2,10);
                }
            }
            else{
                return createlabelOnTop(12);
            }
        }
        else if(col && col == "6"){
            if(labelOnLeft && labelOnLeft == "true"){
                return createlabelOnLeft(2,4)
            }
            else{
                return createlabelOnTop(6);
            }
        }
        else if(col && col == "4"){
            if(labelOnLeft && labelOnLeft == "true"){
                return createlabelOnLeft(1,3)
            }
            else{
                return createlabelOnTop(4);
            }
        }
        else if(col && col == "3"){
            if(labelOnLeft && labelOnLeft == "true"){
                return createlabelOnLeft(1,2);
            }
            else{
                return createlabelOnTop(3);
            }
        }
        else{
            if(labelOnLeft && labelOnLeft == "true"){
                return createlabelOnLeft(2,10)
            }
            else{
                return createlabelOnTop(12);
            }
        }
    }
    const keypressed = (event)=> {
        props.keypressParentCallback(event);
    }
    const createlabelOnTop = (cols)=>{
        return [<div className={ bootstrapGrid['col-md-' + cols] +" " + bootstrapGrid['col-sm-12'] + " " + inputShape.container+ " " + shape.formFieldOuterLableOnTop}>
                    <div className={ shape.topLableContainer}>{props.label}</div>
                    <input value={inputValue}  onKeyPress={keypressed}  onChange={e => setInputValue(e.target.value)} type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                    <div className={inputTypo.validationMessage+ " " + inputColor.validationMessage}>{validationMessage}&nbsp;</div>
                </div>
                ];
    }
    const createlabelOnLeft =(colsForLabel,colsForfield)=>{
        return [<div onClick={()=>props.callTo()} className={ bootstrapGrid['col-md-' + colsForLabel] + " " + bootstrapGrid['col-sm-12']+ " " + shape.container+ " " + shape.lableContainer}>
                    {props.label}
                </div>,
                <div className={ bootstrapGrid['col-md-' + colsForfield] + " " + bootstrapGrid['col-sm-12'] + " " + inputShape.container+ " " + shape.formFieldOuterLableOnLeft}>
                    <input value={inputValue} onKeyPress={keypressed}  onChange={e => setInputValue(e.target.value)} type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                    <div className={inputTypo.validationMessage + " " + inputColor.validationMessage}>{validationMessage}&nbsp;</div>
                </div>
                ];
    }
    return createStyledField(props.labelOnLeft,props.col);
});
export default Input;