import React from 'react'

import DrawerToggleButton from 'C:/Users/Mahlatse Charlie/Videos/cheddar/src/components/SideDrawer/DrawerToggleButton' ;
import './Toolbar.css' ;
import LoginButton from '../LoginDrawer/LoginButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>

            <div className="toolbar__logo"><a href="/">The Market Place</a></div>
            <div className="for__space"/>
            <div className="toolbar__nav-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href='/'>My Account</a></li>
                    <li><a href='/'>Cart</a></li>
                </ul>
            </div>
            <div>
                <LoginButton click={props.LoginDrawerHandler}/>
            </div>
        </nav>
    </header>
);

/**
 * 
 */

export default toolbar;