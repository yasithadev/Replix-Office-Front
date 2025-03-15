import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import htmlpicker from './htmlpicker.module.css';
const HtmlPicker = React.forwardRef((props,ref) => {  
    const inputRef = useRef();  
    const [showDatePicker,setShowDatePicker] = useState(false);
    return (
        <div className={htmlpicker.MyDatePicker}>
            <div className={htmlpicker.mdpInput} onClick={()=> setShowDatePicker(true)}>
                <input type='date'/>
            </div>
            {showDatePicker ? (
                <div className='mdp-container'> 
                </div>
            ) : ''}
        </div>
    )
});
export default HtmlPicker;