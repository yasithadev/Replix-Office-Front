import React from 'react'; // React is still needed for JSX
import { bootstrapGrid } from '../comp.properties.js';
import raw from './raw.module.css';

// Functional component definition
const Raw = (props) => {

    return (
        <div className={bootstrapGrid.row + " " + raw.main}>
            {props.children}
        </div>
    );
};

export default Raw;