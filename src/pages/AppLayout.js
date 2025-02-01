import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
import OfficeLayout from "../components/layout/officeLayout";
import {secondController} from "../controllers/secondController";
import { useNavigate } from "react-router-dom";
import React, {useState,useRef, useEffect } from 'react';
import Authentication from '../models/Authentication';
import logger from '../util/log/logger';

//import console = require("console");
const AppLayout = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  if(!Authentication.getInstance().getJwt()){
    logger.debug("--------------------Authentication.getInstance().getJwt()--------------------" ,Authentication.getInstance().getJwt());

    // Somewhere in your code, e.g. inside a handler:
    navigate("/login");
    return;
  }
  setIsLoading(false); 
}, []);
  if (isLoading) {
    return <div>Loading...</div>; // Optionally show a loading spinner or message
  }
  else{
    return (
      <>
          <OfficeLayout getLeftMenuContent={secondController.getLeftMenuData}>hi</OfficeLayout>
      </>
    );
  }
};

export default AppLayout;