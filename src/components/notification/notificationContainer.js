import React, {useState,useRef, useEffect } from 'react';
import NotificationContainerStyle from './notificationContainer.module.css';
import Notification from './notification';

const NotificationContainer = (props) => { 
    let notificationsWorkingCopy = ["Error"];
    const [notifications, setNotifications] = useState(notificationsWorkingCopy);
    
    useEffect(() => {
        document.addEventListener('notify', notyfy, false); 
    }, [props]);
    const notyfy=(e)=> {  
        console.log("<----------------------- notify =============================>");
        notificationsWorkingCopy=["warning","Error"];
        setNotifications(notificationsWorkingCopy);
        //document.dispatchEvent(new Event("notify"));
    }
    const removeLast=()=> {
        notificationsWorkingCopy.pop();
        setNotifications(notificationsWorkingCopy);
        console.log("notificationsWorkingCopy ",notificationsWorkingCopy.toString);
    }
    return(<div className={NotificationContainerStyle.notificationContainer }>
    {notifications.map(notification=>(<Notification key={notification}remove={removeLast}>{notification }</Notification>))}
    </div>);
}
export default NotificationContainer;