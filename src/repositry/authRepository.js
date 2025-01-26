import axios from 'axios';
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
        catch(error)
        {
            console.log(error);
            throw error;
        }
    }
}
export let authRepository = new AuthRepository();