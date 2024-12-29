//import {purpose} from '../views/purpose';
//import {jsonEdit} from '../views/jsonEdit';
import {sideMenuContent} from '../pages/leftMenuBarContent';
class SecondController{
/*
    methodthree()
    {
        console.log("method three get calledd");
    }
    methodFour()
    {
        console.log("method four get calledd");
    }
    getPurposeView(){
        return jsonEdit;
    }
*/
    constructor(){
        this.loginStatus = false;
    }
    
    getLoginStatus(){
        return this.loginStatus;
    }

    setLoginStatus(status){
        this.loginStatus = status;
    }

    getLeftMenuData(){
        return sideMenuContent;
    }
    
}
export let secondController = new SecondController();