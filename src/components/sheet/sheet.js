import React from 'react';
import {sheetColor} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import {bootstrapGrid} from '../comp.properties.js';
import SheetStyle from './sheet.module.css';
class Sheet extends React.Component
{
    render()
    { 
        return <div className={ shape.sheetOuter }>
            <div className={ bootstrapGrid['container-fluid'] + " " + sheetColor.sheet + " " + shape.sheet }>
            {this.props.children}      
            </div>
        </div>
    }

/*
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className={ bootstrapGrid.row}>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                    <div className={ bootstrapGrid.col + " " + shape.container}>
                    <input  type="text" id="fname" name="fname"/>
                    </div>
                </div>
*/
}
export default Sheet;