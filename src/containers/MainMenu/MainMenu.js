// The Main Menu will contain the +, -, and inventory buttons
// where the core functionality of the app will take place

import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import MenuContent from '../../components/MenuContent/MenuContent';
import classes from './MainMenu.module.css';
import { FaBriefcase, FaPlus, FaMinus } from 'react-icons/fa';

class MainMenu extends Component {
  state = {
    inModal: false,
    modalType: ''
  }

  addItemHandler = () => {
    this.setState({inModal: true, modalType: 'add'});
    console.log("Add Item")
  }

  removeItemHandler = () => {
    console.log("Remove Item")
  }

  openInventoryHandler = () => {
    console.log("Entering inventory")
  }

  modalClosedHandler = () => {
    this.setState({inModal: false})
  }

  

  render () {
    return (
      <React.Fragment>
        <Modal show={this.state.inModal} closeModal={this.modalClosedHandler}>
          <MenuContent type={this.state.modalType} />
        </Modal>
        <div className={classes.MainMenu}>
          <div>
            <Button clicked={this.addItemHandler}><FaPlus /></Button>
            <Button clicked={this.removeItemHandler}><FaMinus /></Button>
          </div>
          <Button clicked={this.openInventoryHandler}><FaBriefcase /></Button>
        </div>
      </React.Fragment>
    );
  }
}

export default MainMenu;