import NotificationStyle from './notification.module.css';
import React, {useState,useRef, useEffect } from 'react';

const Notification = (props) => {  
    let firstUseEffect = true;
    const [opacity,setOpacity] = useState(1);
    useEffect(() => {
        if(firstUseEffect){
            setTimeout(selfRemove, 7500);
        }
        firstUseEffect = false;
    }, [props]);
    const selfRemove = () => {  
        console.log("selfRemove");
        setOpacity(0);
        setTimeout(function() {
            props.remove(props.id);
        }, 300);
    }
    return (<div className={NotificationStyle.notification} style={{opacity: opacity}}>
        <span className={NotificationStyle.closebtn} onClick={selfRemove}>&times;</span> 
        <div className={NotificationStyle.content}>{props.children}</div>
        </div>);
}
export default Notification;