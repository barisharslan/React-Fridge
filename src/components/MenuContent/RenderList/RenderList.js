import React from 'react';
import Tile from '../../UI/Tile/Tile';

const renderList = ( props ) => {
  

  return (
    props.options.map(option => (
      <Tile 
        key={option.name}
        clicked={() => {
           // if at option with no suboptions, ie a choice, return itemChosenMethod
          return option.options ? props.newListMethod( option.options, props.newListMethod, props.itemChosenMethod )
            : props.itemChosenMethod( option.name )

          
        }}
      >
        {option.name}
      </Tile>
    ))
  )
}

export default renderList;