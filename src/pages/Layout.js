import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
import SysLayout from "../components/layout.system/systemLayout";
import {secondController} from "../controllers/secondController";
const Layout = () => {
  return (
    <>
    <SysLayout getLeftMenuContent={secondController.getLeftMenuData}></SysLayout>
    </>
  )
};

export default Layout;