import axios from 'axios';
import { AxiosError } from "axios";
import UnauthorizedException from '../exception/UnauthorizedException';

class AuthRepository{

    constructor(){
        this.loginStatus = false;
    }

    async doBasicAuthentication(username,password){
        console.log(username,"xxxxxxxxvvvvv");//TODO:add debug log
        console.log(password);//TODO:add debug log
        let url = 'http://localhost:8080/api/test/signin';
        try{
            const response = await axios.post(url,{
                email: username,
                password: password
            });
            //console.log("----------------",response,"-----------");//TODO:add debug log
            return response;
        }
        catch(e)
        {
            if (e instanceof AxiosError) {
                if(e.status == 401){
                    console.error("AxiosError.status:401");
                    throw new UnauthorizedException();
                }
                console.log(e);
                throw e;
            }
        }
    }
}
export let authRepository = new AuthRepository();