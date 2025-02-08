import React from 'react';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';
import Input from '../input/input';
class Tel extends Input
{

    render()
    { 
        var field = this.createStyledField(this.props.labelOnTop,this.props.col);
        return field;
    }

    createlabelOnTop(cols){
        return [<div className={ bootstrapGrid['col-' + cols] + " " + shape.container+ " " + shape.formFieldOuterLableOnTop}>
                    <div className={ shape.topLableContainer}>{this.props.label}</div>
                    <input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                </div>
                ];
    }
    createlabelOnLeft(colsForLabel,colsForfield){
        return [<div onClick={()=>this.props.callTo()} className={ bootstrapGrid['col-' + colsForLabel] + " " + shape.container+ " " + shape.lableContainer}>
                    {this.props.label}
                </div>,
                <div className={ bootstrapGrid['col-' + colsForfield] + " " + shape.container+ " " + shape.formFieldOuterLableOnLeft}>
                    <input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                </div>
                ];
    }
}
export default Tel;