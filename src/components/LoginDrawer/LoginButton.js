import React from 'react'

import './LoginButton.css' ;

const LoginButton = props => (
    <button className="Login-btn" onClick={props.click}>
        <a className="Login-btn">Login</a>
    </button>
)

export default LoginButton;