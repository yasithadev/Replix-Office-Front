import { Outlet} from "react-router-dom";
import SideNav from "../components/SideNav";
import OfficeLayout from "../components/layout/officeLayout";
import {secondController} from "../controllers/secondController";
import { useNavigate } from "react-router-dom";
import React, {useState,useRef, useEffect } from 'react';
import Authentication from '../models/Authentication';

//import console = require("console");
const AppLayout = () => {
  let navigate = useNavigate();
  useEffect(() => {
  if(!Authentication.getInstance().getJwt()){
    console.log("--------------------Authentication.getInstance().getJwt()--------------------" ,Authentication.getInstance().getJwt());

    // Somewhere in your code, e.g. inside a handler:
    navigate("/login"); 
    return;
  }
}, []);
  
  return (
    <>
        <OfficeLayout getLeftMenuContent={secondController.getLeftMenuData}>hi</OfficeLayout>
    </>
  )
};

export default AppLayout;