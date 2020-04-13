import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const sideDrawer = ( props ) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if ( props.isOpen ) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <React.Fragment>
      <Backdrop show={props.isOpen} clicked={props.drawerClosed}/>
      <div className={attachedClasses.join(' ')}>
        <Logo fontSize={4} />
      </div>

    </React.Fragment>
  );
}

export default sideDrawer;