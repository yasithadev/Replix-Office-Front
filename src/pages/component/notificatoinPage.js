import Sheet from '../../components/sheet/sheet';
import Code from '../../components/code/Code';
import H5 from '../../components/typo/H5'; 
import Notifier from '../../components/notification/Notifier';

import Modal from '../../components/modal/modal'

const NotificatoinPage = (props) => {   
    const errorNotifier = () =>{
        //document.dispatchEvent(new Event("notify"));
        Notifier.notify("Error","94rt - Shis is a big Problem. let notificationModel = new NotificationModel Shis is a big Problem.");
    } 
    const infoNotifier = () =>{
        //document.dispatchEvent(new Event("notify"));
        Notifier.notify("Error","🛈 Shis is a big Problem. let notificationModel = new NotificationModel Shis is a big Problem.");
    } 
    return <Sheet>
        <button onClick={errorNotifier}>Error</button>
        <button onClick={infoNotifier}>Info</button>
        <Modal></Modal>
    </Sheet>;
}
export default NotificatoinPage;