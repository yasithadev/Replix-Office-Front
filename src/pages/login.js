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

const Login = () => {
  let navigate = useNavigate();
  const shoot = async (username,password) => {
    console.log("----------------shoot-----------------")
    secondController.setLoginStatus(true);
    await authService.doBasicAuthentication(username,password)
    navigate("/");
  }
  
  return (
    <>
      <BasicLogin onLoginButtonClicked={shoot} >Please Login</BasicLogin>
    </>
  )
};

export default Login;