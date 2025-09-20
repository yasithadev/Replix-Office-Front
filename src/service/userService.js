import User from '../models/user';
import {userRepository} from "../repositry/userRepository";

class UserService{
    constructor(){}
    async createUserManager(userDetails){
        const user = this.mapdata(userDetails);
        console.log("user ",user);
        userRepository.makeCreateUserApiCall(user);
    }
    mapdata(userDetails){
        // Convert to boolean
        const isActive = userDetails["Active/Inactive"] === "1";
        // Create User instance
        const user = new User(
            userDetails.UserName,
            userDetails.Email,
            userDetails.FirstName,
            userDetails.SecondName,
            isActive
        );
        return user;
    }
}
export let userService = new UserService();