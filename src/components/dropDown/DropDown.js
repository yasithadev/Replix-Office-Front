import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import dropDown from './dropDown.module.css';
//import console = require('console');
const DropDown = React.forwardRef((props,ref) => {  
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
        <div ref={myElementRef} className={dropDown.MyDatePicker}>
            <div className={dropDown.mdpInput} onClick={()=> setShowDatePicker(true)}>
                <input type='text'/>
            </div>
            {showDatePicker ? (
            <div className={dropDown.mdpContainer}> xx
                </div>
            ) : ''}
        </div>
    )
});
export default DropDown;