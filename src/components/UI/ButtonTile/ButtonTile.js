import React from 'react';
import classes from './ButtonTile.module.css';

const buttonTile = ( props ) => (
  <button className={[classes.ButtonTile, classes[props.btnType]].join(' ')}>
    {props.children}
  </button>
)

export default buttonTile;