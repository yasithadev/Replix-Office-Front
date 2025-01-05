import axios from 'axios';
class AuthRepository{

    constructor(){
        this.loginStatus = false;
    }
    

    doBasicAuthentication(username,password){
        console.log(username,"xxxxxxxx");
        console.log(password);
        let url = 'http://localhost:8080/api/test/signin';
        axios.post(url,{
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        return null;
    }
}
export let authRepository = new AuthRepository();