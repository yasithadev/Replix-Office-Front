import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
//import SysLayout from "../components/layout.system/systemLayout";
import {secondController} from "../controllers/secondController";
import {authController} from "../controllers/authController";
import {authService} from "../service/AuthService";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import BasicLogin from "../components/login/login";
import { useNavigate } from "react-router-dom";
import InvalidCredentialException from '../components/login/InvalidCredentialException';
import UnauthorizedException from '../exception/UnauthorizedException';

const Login = () => {
  let navigate = useNavigate();
  const shoot = async (username,password) => {
    console.log("----------------shoot-----------------")
    //secondController.setLoginStatus(true);
    try{
        await authService.doBasicAuthentication(username,password)
        navigate("/");
    }
    catch(e){
      if (e instanceof UnauthorizedException) {
        throw new InvalidCredentialException();
      }
    }

  }
  
  return (
    <>
      <BasicLogin onLoginButtonClicked={shoot} >Please Login</BasicLogin>
    </>
  )
};

export default Login;