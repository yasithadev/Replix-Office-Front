import React from 'react';
import SysLayoutStyle from './systemlayout.module.css';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import { Outlet} from "react-router-dom";
import SideNav from "../SideNav.js";
class SystemLayout extends React.Component{


    constructor(props) {
        super(props);
        console.log("this",this.props.children);
        this.leftContainer = React.createRef();
        this.rightContainer = React.createRef();
        this.state = {
          leftwidth: null,
          leftOfRight:null,
          dragging:false
        }
        this.element = null;
        this.startX; this.startY; this.startWidth; this.startHeight;this.startwidthleftCont;
        this.initDrag= this.initDrag.bind(this);
        this.doDrag = this.doDrag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
      }
    componentDidMount() 
    {
        var right = document.createElement('div');
        //var cssclass = SysLayoutStyle.resizer-right;
        //var right = React.createElement('div',null,'hello');
        right.className = SysLayoutStyle.ResizerRight + " " + color.ResizerRight;
        this.leftContainer.current.appendChild(right);
        right.addEventListener("mousedown", this.initDrag, false);
        //document.addEventListener("mousedown", this.doDrag, false);
        right.parent = this.leftContainer;

  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
    if(this.state.dragging){
      document.addEventListener("mousemove", this.doDrag, false);
      document.addEventListener('mouseup', this.stopDrag, false);
    }
    else{
      console.log("removing lisner");
      document.removeEventListener("mousemove", this.doDrag, false);
      document.removeEventListener('mouseup', this.stopDrag, false);
    }
  }
  initDrag(e) {   
    //console.log("this.leftContainer",this.leftContainer.current.offsetWidth);
    //console.log("e",e );
    this.element = this.leftContainer;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.startWidth = this.leftContainer.current.offsetWidth;
    this.startwidthleftCont = this.leftContainer.current.offsetWidth-250;
    this.setState({dragging:true});
  }
  doDrag(e) {
    this.setState({
      leftwidth:this.startWidth + e.clientX - this.startX + "px",
      leftOfRight:this.startwidthleftCont + e.clientX - this.startX + "px"
    
    });
  }
  stopDrag() {
    console.log("stopDrag");
    this.setState({dragging:false});
  }
  render()
  {   
        return [<div className={SysLayoutStyle.layoutBackground + " " + color.layoutBackground}></div>,
        <div ref={this.leftContainer}  className={SysLayoutStyle.left + " " + color.left} style={{width: this.state.leftwidth}}> hello layout
          <div className={SysLayoutStyle.leftContent + " " + color.leftContent}>
          <SideNav></SideNav>
          </div>
        </div>,
        <div ref={this.rightContainer}  className={SysLayoutStyle.right + " " + color.right} style={{left: this.state.leftOfRight}}> 
        <div className={SysLayoutStyle.rightContainer + " " + color.rightContainer} >
        <div className={SysLayoutStyle.rightContent} >

        <Outlet/> 
            </div>         
          </div>
        </div>,
        <div className={SysLayoutStyle.menubar + " " + color.menubar}></div>]
        ;
    }

}
export default SystemLayout;
