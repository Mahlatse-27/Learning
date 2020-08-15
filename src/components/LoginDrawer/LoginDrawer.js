import React from 'react' ;
import './LoginDrawer.css' ;


const LoginDrawer = props => {
    let drawerClasses='Login-Drawer' ;
    
    if(props.show){
        drawerClasses='Login-Drawer Open-Drawer'
    }
    
    return (<div className={drawerClasses}>
        <div className="Login-Drawer__container">
            <div className="Login-Drawer__photo">
            </div>
            <div className="Login-Drawer__Inputs">
                <form>
                    <input type="text" placeholder="Username" name="name" />
                    <input type="password" placeholder="Password" name="password"/>
                </form>
            </div>
            <div>
                <button className="Login-btn"></button>
            </div>
        </div>
    </div>
    );  
};

export default LoginDrawer ;