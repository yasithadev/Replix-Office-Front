import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
import OfficeLayout from "../components/layout/officeLayout";
import {secondController} from "../controllers/secondController";
const AppLayout = () => {
  return (
    <>
        <OfficeLayout getLeftMenuContent={secondController.getLeftMenuData}>hi</OfficeLayout>
    </>
  )
};

export default AppLayout;