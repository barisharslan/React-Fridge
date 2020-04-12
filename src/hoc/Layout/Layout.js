// Layout will be a higher order component called in App. 
// It will control which screen is being displayed, and wrap it with the Toolbar and SideDrawer

import React, { Component } from 'react'; 
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  render () {
    return (
      <React.Fragment>
        {/* <Toolbar /> */}
        {/* <SideDrawer /> */}
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }

}

export default Layout;