import React from 'react';
import Tile from '../UI/Tile/Tile';
import classes from './MenuContent.module.css';



const options = [
  { 
    name: 'Fruits'
  },
  {
    name: 'Veggies'
  },
  {
    name: 'Dairy'
  },

]

const menuContent = ( props ) => {
  let renderedContent = <div>Loading...</div>;
  if(props.type) {
    renderedContent = (options.map(option => (
      <Tile 
        key={option.name}
        clicked={() => null}
        btnType='Tile'
      >
        {option.name}
      </Tile>
    )))
  } 
  return renderedContent; 
}

export default menuContent;