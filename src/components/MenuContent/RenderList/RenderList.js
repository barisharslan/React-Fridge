import React from 'react';
import Tile from '../../UI/Tile/Tile';

const renderList = ( props ) => {
  

  return (
    props.options.map(option => (
      <Tile 
        key={option.name}
        clicked={(  ) => {
          if (!option.options) {
            return props.itemChosenMethod( option.name )
          }
          return props.newListMethod( option.options, props.newListMethod, props.itemChosenMethod );
          
        }}
      >
        {option.name}
      </Tile>
    ))
  )
}

export default renderList;