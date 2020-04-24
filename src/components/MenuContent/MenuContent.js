import React, { Component } from 'react';
import RenderList from './RenderList/RenderList';

class menuContent extends Component {
  state = {
    activeList: null,
    chosenItem: null
  }

  componentDidMount () {
    if (this.props.type) {
      this.renderListFunc(this.props.options, this.renderListFunc, this.chosenItemFound)
    } 
  }

  chosenItemFound = ( item ) => {
    this.setState({
      ...this.state,
      activeList: null,
      chosenItem: item
    })
  }

  renderListFunc = ( options, newListMethod, itemChosenMethod ) => {
    console.log(options)
    const renderedList = <RenderList options={options} newListMethod={newListMethod} itemChosenMethod={itemChosenMethod} />
    this.setState({
      ...this.state,
      activeList: renderedList
    })
  }


  render () {
    let renderedContent = <div>Loading...</div>;
    if ( this.state.activeList ) {
      renderedContent = this.state.activeList
    } 
    if ( this.state.chosenItem ) {
      renderedContent = <h1>{this.state.chosenItem}</h1>
    }
    return renderedContent;
  }
}

export default menuContent;