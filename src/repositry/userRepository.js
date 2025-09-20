import axios from 'axios';
import { AxiosError } from "axios";
import msg from '../resources/msg';
import UnauthorizedException from '../exception/UnauthorizedException';
import NetworkErrorException from '../exception/NetworkErrorException';
import Authentication from '../models/Authentication';
class UserRepository{
    async makeCreateUserApiCall(user){
        let url = 'http://localhost:8080/user/create';
       let token = Authentication.getInstance().getJwt();
        try{
            const response = await axios.post(url,user,{
                headers: {
                  Authorization: `Bearer ${Authentication.getInstance().getJwt()}`
                }
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
export let userRepository = new UserRepository();