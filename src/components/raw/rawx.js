import React from 'react';
import {bootstrapGrid} from '../comp.properties.js';
import raw from './raw.module.css';
class Raw extends React.Component
{
    /*
    validate(){
        callChildmethods();
    }
    callChildmethods(){
        loop{
            call child validate method and return ovrll validation 
        }
    }
    inputKeyPressed(){ //need to add this method as all children as prop

    }
    */
    render()
    { 
        return  <div className={ bootstrapGrid.row + " " + raw.main}>{this.props.children}</div>;
}}
export default Raw;