import {authRepository} from "../repositry/authRepository";
import Authentication from '../models/Authentication';
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
            const user1 = new Authentication("firstJwtToken", ["read", "write"]); 
            console.log(user1.getJwt()); // Output: firstJwtToken 
            console.log(user1.getPermissions()); // Output: ["read", "write"]
            return null;
        }
}
export let authController = new AuthController();