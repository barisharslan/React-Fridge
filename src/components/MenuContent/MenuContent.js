import React from 'react';

const content = {
  'add': (
    <div>
      <h3>Add an item</h3>
      <div>
        <p style={{display: 'inline-block'}}>Location: </p>
        <select 
          style={{display: 'inline-block', textAlign: 'right', margin: '10px'}}
          id="">
            <option>Fridge</option>
            <option>Freezer</option>
            <option>Pantry</option>
            <option>Spice Cabinet</option>
        </select>
      </div>
      <div>
        <p style={{display: 'inline-block'}}>Food: </p>
        <select 
          style={{display: 'inline-block', textAlign: 'right', margin: '10px'}}
          id="">
            <option>Potato</option>
            <option>Tomato</option>
            <option>Chicken</option>
            <option>Bread</option>
        </select>
      </div>

    </div>),
  
}

const menuContent = ( props ) => {
  // Is this best practice?
  if(props.type) {
    return content[props.type]
  } else {
    return <div>Loading...</div>
  }
  
}

export default menuContent;