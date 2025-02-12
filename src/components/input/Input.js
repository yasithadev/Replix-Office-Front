import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';

const Input = (props) => {    
    const createStyledField = (labelOnTop,col)=>{
        if(col && col == "1"){
            if(labelOnTop&& labelOnTop == "true"){
                return createlabelOnTop(12);
            }
            else{
                if(props.longLabels && props.longLabels == "true"){
                    return createlabelOnLeft(3,9);
                }
                else{
                    return createlabelOnLeft(2,10);
                }
                
            }
        }
        else if(col && col == "2"){
            if(labelOnTop && labelOnTop == "true"){
                return createlabelOnTop(6);
            }
            else{
                return createlabelOnLeft(2,4)
            }
        }
        else if(col && col == "3"){
            if(labelOnTop && labelOnTop == "true"){
                return createlabelOnTop(4);
            }
            else{
                return createlabelOnLeft(1,3)
            }
        }
        else if(col && col == "4"){
            if(labelOnTop && labelOnTop == "true"){
                return createlabelOnTop(3);
            }
            else{
                return createlabelOnLeft(1,2)
            }
        }
        else{
            if(labelOnTop && labelOnTop == "true"){
                return createlabelOnTop(12);
            }
            else{
                return createlabelOnLeft(2,10)
            }
        }
    }
    const createlabelOnTop = (cols)=>{
        return [<div className={ bootstrapGrid['col-md-' + cols] +" " + bootstrapGrid['col-sm-12'] + " " + shape.container+ " " + shape.formFieldOuterLableOnTop}>
                    <div className={ shape.topLableContainer}>{props.label}</div>
                    <input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                </div>
                ];
    }
    const createlabelOnLeft =(colsForLabel,colsForfield)=>{
        return [<div onClick={()=>props.callTo()} className={ bootstrapGrid['col-md-' + colsForLabel] + " " + bootstrapGrid['col-sm-12']+ " " + shape.container+ " " + shape.lableContainer}>
                    {props.label}
                </div>,
                <div className={ bootstrapGrid['col-md-' + colsForfield] + " " + bootstrapGrid['col-sm-12'] + " " + shape.container+ " " + shape.formFieldOuterLableOnLeft}>
                    <input type="text" className={ color.formField+ " " + shape.formField} id="fname"  name="fname"/> 
                </div>
                ];
    }
    return createStyledField(props.labelOnTop,props.col);
}
export default Input;