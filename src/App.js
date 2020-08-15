import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar' ;
import SideDrawer from './components/SideDrawer/SideDrawer' ;
import Backdrop from './components/Backdrop/Backdrop' ;
import LoginDrawer from './components/LoginDrawer/LoginDrawer' ;

import './App.css'

class App extends Component {
 
  state = {
    DrawerOpen: false
  };


  loginState = {
    isLogIn: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
        return {DrawerOpen: !prevState.DrawerOpen}
    });
  };

  LoginDrawerClickHandler = () => {
    this.setState((prevState) => {
      return { isLogIn:!prevState.isLogIn};
  });
  }

  backdropClickHandler = () => {
    this.setState({DrawerOpen: false,
    isLogIn: false})
  };


render(){

  let backdrop ;
  
  if(this.state.DrawerOpen){ 
    backdrop = <Backdrop click={this.backdropClickHandler}/>
  }
  if (this.loginState.isLogIn){
    backdrop = <Backdrop click={this.backdropClickHandler}/>
  }

  return (
    <div className="App">
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} LoginDrawerHandler={this.LoginDrawerHandleClicker} />
      <SideDrawer show={this.state.DrawerOpen}/>
      <LoginDrawer show={this.loginState.isLogIn}/>
      {backdrop}
      <main>
        <p>
          Hello Mahlatse right here, I'm here to ..... you know
        </p>
      </main>
    </div>);
  }     
};

export default App;