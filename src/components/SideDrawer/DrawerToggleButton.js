import React from 'react'

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn__line"/>
        <div className="toggle-btn__line"/>
        <div className="toggle-btn__line"/>
    </button>
);

export default DrawerToggleButton;