import React from 'react';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';

const Title = ({ children }) => {
    return(
        <div className={ bootstrapGrid.row + " " +  bootstrapGrid.col + " " + shape.title+ " " + color.title}>
                <p>{children}</p>
            </div>   
    );   
};

export default Title;