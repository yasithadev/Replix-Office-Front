import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
//import SysLayout from "../components/layout.system/systemLayout";
import {secondController} from "../controllers/secondController";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
const Login = () => {
  const shoot = () => {
    secondController.setLoginStatus(true);
  }
  
  return (
    <div>
    <h1>Please Login</h1>
    <Link to="/"><Button onClick={shoot} variant="contained">login</Button></Link>
    </div>
  )
};

export default Login;