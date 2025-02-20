import React from 'react';
import {bootstrapGrid} from '../comp.properties.js';
import raw from './raw.module.css';
class Raw extends React.Component
{
    render()
    { 
        return  <div className={ bootstrapGrid.row + " " + raw.main}>{this.props.children}</div>;
}}
export default Raw;