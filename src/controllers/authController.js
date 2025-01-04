import {authRepository} from "../repositry/authRepository";
class AuthController{

        constructor(){
            this.loginStatus = false;
        }
        
        getLoginStatus(){
            return this.loginStatus;
        }
    
        setLoginStatus(status){
            this.loginStatus = status;
        }
    
        doBasicAuthentication(username,password){
            authRepository.doBasicAuthentication(username,password);
            return null;
        }
}
export let authController = new AuthController();