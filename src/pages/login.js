import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
import SysLayout from "../components/layout.system/systemLayout";
import {secondController} from "../controllers/secondController";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div>
    <h1>Please Login</h1>
    <Link to="/layout"><Button variant="contained">login</Button></Link>
    </div>
  )
};

export default Login;