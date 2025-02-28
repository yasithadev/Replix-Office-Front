import NotificationStyle from './notification.module.css';

const Notification = (props) => {  
    return (<div className={NotificationStyle.notification}>{props.children}</div>);
}
export default Notification;