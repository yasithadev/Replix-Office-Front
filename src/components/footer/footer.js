import React from 'react';
import SysLayoutStyle from './footer.module.css';
class Footer extends React.Component{
    render()
    { 
        return[
            <div className={SysLayoutStyle.pusher}>pusher</div>,
            <div className={SysLayoutStyle.footer}>footer</div>
        ];
    }
}
export default Footer;