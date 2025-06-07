import React from 'react';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';
import Raw from '../raw/raw';
///import Tel from '../tel/tel';
class Section extends React.Component
{   //this compomponent should same as form component but only the name shouldbe different
    render()
    { /*
        var i=0,colCount=0,rawCount=0;
        var fieldList=[] ;
        var rawList=[] ;
        var colIndex = this.props.col-1;
        var addedlastFieldsToRaw=false;
        React.Children.forEach(this.props.children, child => 
        {                   
                if(child.props.type=="tel"){
                    fieldList[colCount]=  <Tel label={child.props.label} labelOnTop={this.props.labelOnTop} col={this.props.col} longLabels={this.props.longLabels} />;                    
                }
                addedlastFieldsToRaw = false;
                if(colCount == colIndex){
                    colCount = 0;
                    rawList[rawCount] = <Raw>{fieldList}</Raw>;
                    fieldList=[]; 
                    addedlastFieldsToRaw = true;
                    rawCount++;
                }
                else{
                    colCount++;
                }
                
                i++;
                //console.log('child Props After=', child.props);
        });
        if(!addedlastFieldsToRaw){
            rawList[rawCount] = <Raw>{fieldList}</Raw>; 
        }
        return rawList ;

 */
return;//dummyreturn
}
}
export default Section;