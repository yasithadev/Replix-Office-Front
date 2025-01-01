import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
//import SysLayout from "../components/layout.system/systemLayout";
import {secondController} from "../controllers/secondController";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import BasicLogin from "../components/login/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const shoot = () => {
    console.log("----------------shoot-----------------")
    secondController.setLoginStatus(true);
    navigate("/"); 
  }
  
  return (
    <>
      <BasicLogin onLoginButtonClicked={shoot} >Please Login</BasicLogin>
      <Link to="/"><Button onClick={shoot} variant="contained">login</Button></Link>
    </>
  )
};

export default Login;