import React from 'react';
import { FaRaspberryPi } from 'react-icons/fa';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{fontSize: props.fontSize + 'rem'}} >
    <FaRaspberryPi />
  </div>);

export default logo;