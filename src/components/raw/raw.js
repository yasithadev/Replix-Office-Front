import React from 'react';
import {bootstrapGrid} from '../comp.properties.js';
class Raw extends React.Component
{
    render()
    { 
        return  <div className={ bootstrapGrid.row}>{this.props.children}</div>;
}}
export default Raw;