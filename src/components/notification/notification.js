import React, {useState,useRef, useEffect } from 'react';
import NotificationStyle from './notification.module.css';

const Notification = (props) => {  
    const [height,setHeight] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log("    useEffect(() => {");
        console.log(props.children);
        console.log(isLoading);
        if(!isLoading){
            console.log("changing height");
            setHeight("250px");
        }
        setIsLoading(false); 
    }, [props]);
    if (isLoading) {
        return (<div className={NotificationStyle.notification}>{props.children + {isLoading}}</div>);
    }
    else{
        return (<div className={NotificationStyle.notification}>{props.children+ {isLoading}}</div>);
      }
    
}
export default Notification;