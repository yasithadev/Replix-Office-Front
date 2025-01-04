class AuthRepository{

    constructor(){
        this.loginStatus = false;
    }
    

    doBasicAuthentication(username,password){
        console.log(username,"xxxxxxxx");
        console.log(password);
        
        return null;
    }
}
export let authRepository = new AuthRepository();