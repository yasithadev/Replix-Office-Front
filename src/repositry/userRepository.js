import axios from 'axios';
import { AxiosError } from "axios";
import msg from '../resources/msg';
import UnauthorizedException from '../exception/UnauthorizedException';
import NetworkErrorException from '../exception/NetworkErrorException';
import EmailRegisteredException from '../exception/EmailRegisteredException';
import UserNameTakenException from '../exception/UserNameTakenException';
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
                console.log(e);
                if(e.code == "ERR_NETWORK"){//handling Axios error code
                    console.error("W503:",msg.W503);
                    throw new NetworkErrorException();
                }
                else if(e.status == "401" && e.response.data.error==="Unauthorized"){//handling spring security response
                    console.error("S401:",msg.S401);
                    throw new UnauthorizedException();
                }
                else if(e.status == "409" && e.response.data.errorCode==="EMAIL_REGISTERED"){//handling Replix error code
                    console.error("S409:",e);
                    throw new EmailRegisteredException();
                }
                else if(e.status == "409" && e.response.data.errorCode==="USERNAME_TAKEN"){//handling Replix error code
                    console.error("S409:",e);
                    throw new UserNameTakenException();
                }
                else if(e.status == "409"){//handling Replix error code
                    console.error("S409:",e);
                    throw new UserNameTakenException();
                }
                else{
                    console.log(e);
                    throw e;
                }
            }
        }
    }
}
export let userRepository = new UserRepository();