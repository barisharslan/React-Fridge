// The Main Menu will contain the +, -, and inventory buttons
// where the core functionality of the app will take place

import React, { Component } from 'react';
import ButtonTile from '../../components/UI/ButtonTile/ButtonTile';
import classes from './MainMenu.module.css';
import { FaBriefcase, FaPlus, FaMinus } from 'react-icons/fa';

class MainMenu extends Component {

  render () {

    return (
      <div className={classes.MainMenu}>
        <div>
          <ButtonTile><FaPlus /></ButtonTile>
          <ButtonTile><FaMinus /></ButtonTile>
        </div>
        <ButtonTile><FaBriefcase /></ButtonTile>
      </div>
    );
  }
}

export default MainMenu;