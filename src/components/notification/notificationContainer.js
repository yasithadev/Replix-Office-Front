import React, {useState,useRef, useEffect } from 'react';
import NotificationContainerStyle from './notificationContainer.module.css';
import Notification from './notification';

const NotificationContainer = (props) => { 
    const [notifications, setNotifications] = useState(["Error"]);
    useEffect(() => {
        document.addEventListener('notify', notyfy, false); 
    }, [props]);
    const notyfy=(e)=> {  
        console.log("<----------------------- notify =============================>");
        setNotifications(["warning","Error"])
        //document.dispatchEvent(new Event("notify"));
    }
    return(<div className={NotificationContainerStyle.notificationContainer }>
    {notifications.map(notification=>(<Notification key={notification}>{notification}</Notification>))}
    </div>);
}
export default NotificationContainer;