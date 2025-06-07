import axios from 'axios';
import { AxiosError } from "axios";
import UnauthorizedException from '../exception/UnauthorizedException';
import NetworkErrorException from '../exception/NetworkErrorException';
import logger from '../util/log/logger';
import msg from '../resources/msg';

class AuthRepository{

    constructor(){
        this.loginStatus = false;
    }

    async doBasicAuthentication(username,password){
        console.log(username,"xxxxxxxxvvvvv");//TODO:add debug log
        console.log(password);//TODO:add debug log
        logger.trace("console","hello");
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
                console.log(e.code);
                if(e.code == "ERR_NETWORK"){
                    console.error("W503:",msg.W503);
                    throw new NetworkErrorException();
                }
                else if(e.code == "ERR_BAD_REQUEST"){
                    console.error("S401:",msg.S401);
                    throw new UnauthorizedException();
                }
                console.log(e);
                throw e;
            }
        }
    }
}
export let authRepository = new AuthRepository();