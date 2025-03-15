import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import datepicker from './datepicker.module.css';
//import console = require('console');
const DatePicker = React.forwardRef((props,ref) => {  
    const myElementRef = useRef(null);
    const [showDatePicker,setShowDatePicker] = useState(false);
    const addBackDrop = (e) => {
        console.log("event fired");
        if(!myElementRef.current.contains(e.target)) {
            //console.log("c");
            setShowDatePicker(false);
        }
    }
    useEffect(() => {
        //window.removeEventListener('click',addBackDrop);
        window.addEventListener('click', addBackDrop);
        return () => {
            window.removeEventListener('click',addBackDrop); // Remove listener
            //console.log('Event listener removed.');
          };
    }, [props]);

    return (
        <div ref={myElementRef} className={datepicker.MyDatePicker}>
            <div className={datepicker.mdpInput} onClick={()=> setShowDatePicker(true)}>
                <input type='date'/>
            </div>
            {showDatePicker ? (
            <div className={datepicker.mdpContainer}> xx
                </div>
            ) : ''}
        </div>
    )
});
export default DatePicker;