import React from 'react';
import classes from './SideDrawer.module.css'

const sideDrawer = ( props ) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if ( props.open ) {
    attachedClasses = [classes.SideDrawer, classes.Closed]
  }

  return (
    <React.Fragment>
      {/* <Backdrop /> */}
      <div className={attachedClasses.join(' ')}>
        
      </div>

    </React.Fragment>
  );
}

export default sideDrawer