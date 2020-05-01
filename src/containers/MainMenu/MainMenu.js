// The Main Menu will contain the +, -, and inventory buttons
// where the core functionality of the app will take place

import React, { Component } from 'react';
// import axios from '../../axios-firebase';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import MenuContent from '../../components/MenuContent/MenuContent';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MainMenu.module.css';
import { FaBriefcase, FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/modal';
// import options from '../../options.json';

class MainMenu extends Component {
  state = {
    inModal: false,
    menuType: '',
    options: []
  }

  addItemHandler = () => {
    this.setState({inModal: true, menuType: 'add'});
    this.props.onSetOptions('add')
    // console.log("Add Item")
  }

  openInventoryHandler = () => {
    this.setState({inModal: true, menuType: 'add'});
    this.props.onSetOptions('inv')
  }

  modalClosedHandler = () => {
    this.props.onResetModal();
    this.setState({inModal: false})
  }

  modalOpenedHandler = ( type ) => {
    // set options for add
    this.props.onSetOptions( type )
  }

  

  render () {
    let modalMenu = <Spinner />;

    // if (this.state.inModal)
    if (this.props.options.length) {
      modalMenu = <MenuContent options={this.props.options} />
    } 

    return (
      <React.Fragment>
        <Modal show={this.state.inModal} closeModal={this.modalClosedHandler}>
        {/* <Modal show closeModal={this.modalClosedHandler}> */}
          {/* <MenuContent type={this.state.menuType} /> */}
          {modalMenu}
        </Modal>
        <div className={classes.MainMenu}>
          <Button 
            clicked={this.addItemHandler}
          ><FaPlus /></Button>
          <Button 
            clicked={this.openInventoryHandler}
          ><FaBriefcase /></Button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    steps: state.modal.steps,
    options: state.modal.options
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetModal: ( ) => dispatch(actions.resetModal()),
    onSetOptions: ( menuType ) => dispatch(actions.setOptions( menuType ))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( MainMenu );