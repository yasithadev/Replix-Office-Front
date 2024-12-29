import React from 'react';
import SysLayoutStyle from './syslayout.module.css';
import {color} from '../comp.properties.js';
import Footer from '../footer/footer';
import { Outlet} from "react-router-dom";
import { withRouter } from 'react-router';

class SysLayout extends React.Component{
    constructor(props) {
        super(props);
        //console.log("this",this.props.children);
        this.leftContainer = React.createRef();
        this.rightContainer = React.createRef();
        this.state = {
          leftwidth: null,
          leftOfRight:null,
          dragging:false,
          sideMenuContent:"Loding....",
          sheet:"Loading..."
        }
        this.element = null;
        //this.startX; this.startY; this.startWidth; this.startHeight;this.startwidthleftCont;
        this.initDrag= this.initDrag.bind(this);
        this.doDrag = this.doDrag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
        this.sheetChangeRequest = this.sheetChangeRequest.bind(this);
        const { history } = this.props;
        //history.push('/login');
        //this.sideMenuContent = "Loding....";
      }

      componentDidMount() 
      {
          //var right = document.createElement('div');
          //right.className = SysLayoutStyle.ResizerRight + " " + color.ResizerRight;
          //this.leftContainer.current.appendChild(right);
          //this.resizer.addEventListener("mousedown", this.initDrag, false);
          //right.parent = this.leftContainer;
          
          console.debug("SysLayout --> componentDidMount -->",this.props.getLeftMenuContent);//Trace
          const ex = new Error();
          console.log('call from [', ex.stack.split('\n')[2].trim().split(' ')[1], ']');

          let sideMenuCntnt = this.props.getLeftMenuContent();
          this.setState({sideMenuContent:sideMenuCntnt});
          //let sheet =this.props.children;
          //this.setState({sheet:sheet });

    }
      initDrag(e) {   
        //console.log("this.leftContainer",this.leftContainer.current.offsetWidth);
        //console.log("e",e );
        this.element = this.leftContainer;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startWidth = this.leftContainer.current.offsetWidth;
        this.startwidthleftCont = this.leftContainer.current.offsetWidth-250;
        document.addEventListener("mousemove", this.doDrag, false);
        document.addEventListener('mouseup', this.stopDrag, false);
        //this.setState({dragging:true});
      }
      doDrag(e) {
        this.setState({
          leftwidth:this.startWidth + e.clientX - this.startX + "px",
          leftOfRight:this.startwidthleftCont + e.clientX - this.startX + "px"
        });
      }
      stopDrag() {
        console.log("stopDrag");
       // this.setState({dragging:false});
        document.removeEventListener("mousemove", this.doDrag, false);
        document.removeEventListener('mouseup', this.stopDrag, false);
      }
      sheetChangeRequest(newSheet){
        console.log("-----------changeSheetRequest");
        this.setState({sheet:newSheet});
      }
  render()
  {   
    const childrenWithProps = React.Children.map(this.state.sideMenuContent, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {sheetChangeRequest:this.sheetChangeRequest});
      }
      return child;
    });
    
        return [<div className={SysLayoutStyle.layoutBackground + " " + color.layoutBackground}></div>,
          <div ref={this.leftContainer}  className={SysLayoutStyle.left } style={{width: this.state.leftwidth}}>
          <div className={SysLayoutStyle.leftContent + " " + color.leftContent}>
          {childrenWithProps}
          </div>
          <div ref={this.resizer} onMouseDown={this.initDrag} className={SysLayoutStyle.ResizerRight + " " + color.ResizerRight}></div>
          </div>,
        <div ref={this.rightContainer}  className={SysLayoutStyle.right + " " + color.right} style={{left: this.state.leftOfRight}}> 
             <Outlet/> 
             <Footer></Footer>
        </div>,
        <div className={SysLayoutStyle.menubar + " " + color.menubar}></div>]
        ;
    }
}
export default SysLayout;