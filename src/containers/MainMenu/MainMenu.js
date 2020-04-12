// The Main Menu will contain the +, -, and inventory buttons
// where the core functionality of the app will take place

import React, { Component } from 'react';
import ButtonTile from '../../components/UI/ButtonTile/ButtonTile';
import classes from './MainMenu.module.css';

class MainMenu extends Component {

  render () {

    return (
      <div className={classes.MainMenu}>
        <div>
          <ButtonTile>+</ButtonTile>
          <ButtonTile>-</ButtonTile>
        </div>
        <ButtonTile>Inventory</ButtonTile>
      </div>
    );
  }
}

export default MainMenu;