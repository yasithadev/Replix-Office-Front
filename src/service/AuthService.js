import {authRepository} from "../repositry/authRepository";
import Authentication from '../models/Authentication';

class AuthService{
    async doBasicAuthentication(username,password){
        try{
            const response = await authRepository.doBasicAuthentication(username,password);
            console.log("----------------",response,"-----------");//TODO:add debug log
            console.log("----------------",response.data.response.token,"-----------");//TODO:add debug log
            const auth = Authentication.getInstance(response.data.response.token, ["read", "write"]);
            auth.setJwt(response.data.response.token);
            auth.setPermissions(["read", "write"]);
            console.log(auth); //TODO:add debug log
            console.log("auth Jwt ",auth.getJwt()); //TODO:add debug log
            console.log(auth.getPermissions()); //TODO:add debug log
            return;
        }catch(e){
            throw e;
        }
    }
}
export let authService = new AuthService();