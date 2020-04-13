import React from 'react';
import Logo from '../../UI/Logo/Logo';
import { FaBars } from 'react-icons/fa';
import classes from './Toolbar.module.css';

const FaBarsStyle = {
  fontSize: '2rem',
  display: 'inline-block'
  // height: '45px',
  // marginLeft: '10px',
}

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <FaBars style={FaBarsStyle} onClick={props.clicked}/>
    <div style={FaBarsStyle}>
      <Logo />
    </div>
    <nav>
      {/* <NavigationItems /> */}
    </nav>
  </header>
);

export default toolbar;