import React from 'react';
import MenuItem from '../components/collapsibleMenu/menuItem';
import CollapsibleMenu from '../components/collapsibleMenu/collapsibleMenu';
//import {sampleModuleController} from '../controllers/sampleModuleContrller';
import {Link} from "react-router-dom";

export const sideMenuContent = [
<Link to="/blogs"><MenuItem  key={"1231122"}>❤️ &#xFE0E; Purpose</MenuItem></Link>,   
<Link to="/contact"><MenuItem  key={"1231123"}>🥅 &#xFE0E; Goals</MenuItem></Link>,
<CollapsibleMenu name="✔ Sample Collapsible Menu">
<Link to="/login"><MenuItem>🗀 login</MenuItem></Link>
    <CollapsibleMenu name="🗀 Sample Collapsible Menu">
        <MenuItem >Example Menu Itemmmmm</MenuItem>
        <CollapsibleMenu name="Sample Collapsible Menu">
            <MenuItem>Example Menu Item</MenuItem>
            <CollapsibleMenu name="Sample Collapsible Menu">
                <MenuItem>Example Menu Item</MenuItem>
                <CollapsibleMenu name="Example Collapsible Menu">
                    <MenuItem>sample item</MenuItem>
                </CollapsibleMenu>
            </CollapsibleMenu>
        </CollapsibleMenu>
        <CollapsibleMenu name="Sample Collapsible Menu" >
            <MenuItem>Example Menu Item</MenuItem>
            <CollapsibleMenu name="Sample Collapsible Menu" >
                <MenuItem>Example Menu Item</MenuItem>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
            </CollapsibleMenu>
        </CollapsibleMenu>
    </CollapsibleMenu>
    <CollapsibleMenu name="Sample Collapsible Menu" ></CollapsibleMenu>
</CollapsibleMenu>,
<CollapsibleMenu name="Sample Collapsible Menu" >
    <MenuItem>Example Menu Item</MenuItem>
    <CollapsibleMenu name="Sample Collapsible Menu" >
        <CollapsibleMenu>
            <CollapsibleMenu>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
                <MenuItem>Example Menu Item</MenuItem>
            </CollapsibleMenu>
            <MenuItem>Example Menu Item</MenuItem>
        </CollapsibleMenu>
        <CollapsibleMenu>
            <CollapsibleMenu>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
                <MenuItem>Example Menu Item</MenuItem>
            </CollapsibleMenu>
            <MenuItem>Example Menu Item</MenuItem>
        </CollapsibleMenu>
        <MenuItem>Example Menu Item</MenuItem>
    </CollapsibleMenu>
    <CollapsibleMenu name="Sample Collapsible Menu" ></CollapsibleMenu>
</CollapsibleMenu>
];