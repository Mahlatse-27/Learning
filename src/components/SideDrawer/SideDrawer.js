
import React from 'react'
import photo from "C:/Users/Mahlatse Charlie/Videos/cheddar/src/Images/side_drawer_pic.jpg"

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses='Side-Drawer' ;
    
    if(props.show){
        drawerClasses='Side-Drawer Open-Drawer'
    }
    
    return (<nav className={drawerClasses}>
        <div className="Side-Drawer__photo">
            <img src={photo} alt="" className="photo"/>
        </div>
        <div className="Side-Drawer__info">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Categories</a></li>
            </ul>
        </div>
    </nav>
    );  
};

export default SideDrawer ;

/*
*

*/