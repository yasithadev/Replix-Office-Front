import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const SideNav = (props) => {
return (
<div >
<Link to="/">Home</Link>
<Link to="/blogs">Blogs</Link>
<Link to="/contact">Contact</Link>
   <a href="#section">Contact</a>
</div>
 )
};
export default SideNav;