import React from 'react';
import SheetStyle from './collapsibleMenu.module.css';

class CollapsibleMenu extends React.Component
{
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
        this.heightChangedCallBack = this.heightChangedCallBack.bind(this);
        //this.render = this.render.bind(this);
        this.state = {conentHeight: "0px",};
        this.iconClass = SheetStyle.rta;
        this.open = false;
        this.contentHeightOfChildren = 0;//content height of its children
        this.itemHeight = 34;
    }
    clicked(){
        if(!this.open){
            if(this.props.children){
                this.iconClass = SheetStyle.rta + " " +SheetStyle.act;
                console.log("--------------------this.props.children" , this.props.children);
                console.log("--------------------this.props.children.length" , this.props.children.length);
                let height = 0;
                if(this.props.children.length){
                    height = (this.props.children.length * this.itemHeight) + this.contentHeightOfChildren;
                }
                else{
                    height = this.itemHeight + this.contentHeightOfChildren
                }
                let heightString = height.toString() + "px";
                //console.log("--------------------heightString" , heightString);
                this.setState({conentHeight: heightString});
                if(this.props.heightChangedCallBack){
                    this.props.heightChangedCallBack(height);
                }
                this.open = true;
            }
        }
        else{
            this.iconClass = SheetStyle.rta;
            this.setState({conentHeight: "0px"});
            if(this.props.children){
                let height = 0;
                if(this.props.children.length){
                    height = this.props.children.length * (this.itemHeight*(-1))- this.contentHeightOfChildren;
                }
                else{
                    height = (this.itemHeight * (-1)) ;
                }
                if(this.props.heightChangedCallBack){
                    this.props.heightChangedCallBack(height);
                }
            }
            this.open = false;
        }
    }
    heightChangedCallBack(childChangedHeight){
        console.log("--------------------lengthChangedCallBack",childChangedHeight);
        this.contentHeightOfChildren = this.contentHeightOfChildren + childChangedHeight;

        let height = 0;
        if(this.props.children.length){
            height = (this.props.children.length * this.itemHeight) + this.contentHeightOfChildren;
        }
        else{
            height = this.itemHeight + this.contentHeightOfChildren
        }

        let heightString = height.toString() + "px";
        //console.log("--------------------heightString" , heightString);
        this.setState({conentHeight: heightString});
        if(this.props.heightChangedCallBack){
            this.props.heightChangedCallBack(childChangedHeight);
        }
    }
    render(){

        
        //let elementsToRender = [];
        const childrenWithProps = React.Children.map(this.props.children, child => {
            // checking isValidElement is the safe way and avoids a typescript error too
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { heightChangedCallBack: this.heightChangedCallBack,sheetChangeRequest:this.props.sheetChangeRequest});
            }
            return child;
          });

        //console.log("this.conentHeight-------",this.state.conentHeight)
        return [<button className={SheetStyle.collapsible} onClick={this.clicked}><div className={this.iconClass}>⏵</div><div className={SheetStyle.name}>{this.props.name}</div></button>,
                <div className={SheetStyle.content} style={{height: this.state.conentHeight}}>
                    {childrenWithProps}
                </div>

                ];
    }

}
export default CollapsibleMenu;