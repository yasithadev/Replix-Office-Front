import React from 'react';
class Input extends React.Component{
    createStyledField(labelOnTop,col){
        if(col && col == "1"){
            if(this.props.labelOnTop && this.props.labelOnTop == "true"){
                return this.createlabelOnTop(12);
            }
            else{
                if(this.props.longLabels && this.props.longLabels == "true"){
                    return this.createlabelOnLeft(3,9);
                }
                else{
                    return this.createlabelOnLeft(2,10);
                }
                
            }
        }
        else if(col && col == "2"){
            if(this.props.labelOnTop && this.props.labelOnTop == "true"){
                return this.createlabelOnTop(6);
            }
            else{
                return this.createlabelOnLeft(2,4)
            }
        }
        else if(col && col == "3"){
            if(this.props.labelOnTop && this.props.labelOnTop == "true"){
                return this.createlabelOnTop(4);
            }
            else{
                return this.createlabelOnLeft(1,3)
            }
        }
        else if(col && col == "4"){
            if(this.props.labelOnTop && this.props.labelOnTop == "true"){
                return this.createlabelOnTop(3);
            }
            else{
                return this.createlabelOnLeft(1,2)
            }
        }
        else{
            if(this.props.labelOnTop && this.props.labelOnTop == "true"){
                return this.createlabelOnTop(12);
            }
            else{
                return this.createlabelOnLeft(2,10)
            }
        }
    }

}
export default Input;