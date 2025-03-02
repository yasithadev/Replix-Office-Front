import React, {useState,useRef, useEffect } from 'react';
import NotificationContainerStyle from './notificationContainer.module.css';
import Notification from './notification';
import NotificationModel from './notificationModel';

let  notificationsWorkingCopy = new Map();

const NotificationContainer = (props) => { 
    const [notifications, setNotifications] = useState(new Map());
    const [renderId, setRenderId] = useState("");
    let firstUseEffect = true;
    const notyfyListner=(e)=> {  
        e.stopImmediatePropagation();
        notyfy();
    }
    const notyfy=()=> {  
        console.log("<----------------------- notify =============================>");
        let id = uuidv4();
        console.log(id)
        let notificationModel = new NotificationModel(id,"Error","9475 - Shis is a big Problem.");
                notificationsWorkingCopy.set(id,notificationModel);
        console.log(notificationsWorkingCopy)
        //notificationsWorkingCopy=["warning","Error"];
        setNotifications(notificationsWorkingCopy);
        setRenderId(id);
        //document.dispatchEvent(new Event("notify"));
    }
    useEffect(() => {
        if(firstUseEffect){
            console.log("<----------------------- firstUseEffect =============================>");
            
            firstUseEffect = false;
            document.addEventListener('notify', notyfyListner, false); 
        }
    }, [props]);
    function uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
      }

    const removeLast=(idToRemove)=> {
        console.log("notification id" ,idToRemove)
        notificationsWorkingCopy.delete(idToRemove);
        setNotifications(notificationsWorkingCopy);
        console.log(notificationsWorkingCopy)
        setRenderId(uuidv4());
        //setNotifications(notificationsWorkingCopy);
        //console.log("notificationsWorkingCopy ",notificationsWorkingCopy.toString);
    }

    return(<div className={NotificationContainerStyle.notificationContainer} {...{"renderId":`${setRenderId}`}}>
    {Array.from(notifications.entries()).reverse().map(([key, value]) =>(<Notification key={value.id} remove={removeLast} id={value.id}>{value.message}</Notification>))}
    </div>);
}
export default NotificationContainer;