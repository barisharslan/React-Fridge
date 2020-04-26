// The Main Menu will contain the +, -, and inventory buttons
// where the core functionality of the app will take place

import React, { Component } from 'react';
import axios from '../../axios-firebase';
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

  

  componentDidMount () {
    axios.get('/options.json')
      .then(res => {
        this.setState({
          ...this.state,
          options: res.data
        })
      })
  }

  addItemHandler = () => {
    this.setState({inModal: true, menuType: 'add'});
    console.log("Add Item")
  }

  openInventoryHandler = () => {
    console.log("Entering inventory")
  }

  modalClosedHandler = () => {
    this.props.onResetModal();
    this.setState({inModal: false})
  }

  

  render () {
    let modalMenu = <Spinner />;

    // if (this.state.inModal)
    if (this.state.options.length) {
      modalMenu = <MenuContent type="add" options={this.state.options} />
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
    steps: state.modal.steps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetModal: ( ) => dispatch(actions.resetModal())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( MainMenu );