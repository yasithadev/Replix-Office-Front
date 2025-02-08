import React from 'react';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';
class Input extends React.Component
{
    render()
    { 
        return [<div onClick={()=>this.props.callTo()} className={ bootstrapGrid['col-2'] + " " + shape.container+ " " + shape.lableContainer}>
                    First Name
                </div>,
                <div className={ bootstrapGrid['col-4'] + " " + shape.container+ " " + shape.formFieldOuter}>
                    <input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                </div>,

<div onClick={()=>this.props.callTo()} className={ bootstrapGrid['col-2'] + " " + shape.container+ " " + shape.lableContainer}>
First Name
</div>,
<div className={ bootstrapGrid['col-4'] + " " + shape.container+ " " + shape.formFieldOuter}>
<input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
</div>
            ];

    }}
export default Input;