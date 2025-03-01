import SysLayoutStyle from './syslayout.module.css';
import {layoutColor} from '../comp.properties.js';
import Footer from '../footer/footer';
import { Outlet} from "react-router-dom";
import { withRouter } from 'react-router';
import NotificationContainer from '../notification/notificationContainer';
import React, {useState,useRef, useEffect } from 'react';


export default function OfficeLayout(props) {

  const rightContainer = useRef(null);
  const leftContainer = useRef(null);
  const resizer = useRef(null);
  var startX;
  var startY;
  var startWidth;
  var startwidthleftCont;

  const [leftwidth, setLeftwidth] = useState("");
  const [leftOfRight, setLeftOfRight] = useState("");
  const [sideMenuContent, setSideMenuContent] = useState("");
  
  useEffect(() => {
    console.log("props--- ",props);
    let sideMenuCntnt = props.getLeftMenuContent();
    setSideMenuContent(sideMenuCntnt);
    console.log("sideMenuCntnt--- ",sideMenuCntnt);


    /*
    childrenWithProps = React.Children.map(sideMenuContent, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {sheetChangeRequest:sheetChangeRequest});
      }
      
      return child;
      
    });
    */
  }, [props]);


  const initDrag=(e)=> {  
    //console.log("this.leftContainer",this.leftContainer.current.offsetWidth);
    //console.log("e",e );
    var element = leftContainer;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = leftContainer.current.offsetWidth;
    startwidthleftCont = leftContainer.current.offsetWidth-250;
    document.addEventListener("mousemove", doDrag, false);
    document.addEventListener('mouseup', stopDrag, false);
    //this.setState({dragging:true});
  }
  const doDrag =(e)=> {
    setLeftwidth(startWidth + e.clientX - startX + "px");
    setLeftOfRight(startwidthleftCont + e.clientX - startX + "px");
  } 
  const stopDrag = (e)=>{
    console.log("stopDrag");
   // this.setState({dragging:false});
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener('mouseup', stopDrag, false);
  }
    return (
      <>
        <div className={SysLayoutStyle.layoutBackground + " " + layoutColor.layoutBackground}></div>
          <div ref={leftContainer} className={SysLayoutStyle.left } style={{width: leftwidth}}>
            <div className={SysLayoutStyle.leftContent + " " + layoutColor.leftContent}>
            {sideMenuContent}
            </div>
          <div ref={resizer} onMouseDown={initDrag} className={SysLayoutStyle.ResizerRight + " " + layoutColor.ResizerRight}></div>
        </div>
        <div ref={rightContainer} className={SysLayoutStyle.right + " " + layoutColor.right} style={{left:leftOfRight}}> 
          <Outlet/> 
          <Footer></Footer>
        </div>
        <div className={SysLayoutStyle.menubar + " " + layoutColor.menubar}></div>
        <NotificationContainer/>
      </>
    );
  }