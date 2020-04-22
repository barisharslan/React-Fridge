import React from 'react';
import classes from './Tile.module.css';

const tile = ( props ) => (
  <button 
    className={classes.Tile}
    onClick={props.clicked} 
  >
    {props.children}
  </button>
)

export default tile;