// Layout will be a higher order component called in App. 
// It will control which screen is being displayed, and wrap it with the Toolbar and SideDrawer

import React, { Component } from 'react'; 
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <React.Fragment>
        <Toolbar clicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          isOpen={this.state.showSideDrawer}
          drawerClosed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }

}

export default Layout;