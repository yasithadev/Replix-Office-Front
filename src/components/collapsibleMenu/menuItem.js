import React from 'react';
import SheetStyle from './collapsibleMenu.module.css';

class MenuItem extends React.Component
{
    constructor(props) {
        super(props);
        //this.clicked = this.clicked.bind(this);
        this.state = {};
    }
    /*
    clicked(){
        console.log("-------------------calling click------------------");
        let sheet = this.props.getView();
        this.props.sheetChangeRequest(sheet);
    }
    */

    render(){
        return [
            <button className={SheetStyle.collapsible} onClick={this.clicked}><div className={SheetStyle.rta} style={{minWidth: "7.625px"}}>&nbsp;&nbsp;</div><div className={SheetStyle.name}>{this.props.children}</div></button>
        ];
    }

}
export default MenuItem;