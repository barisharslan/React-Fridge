import React from 'react';
import { FaBars } from 'react-icons/fa';

const FaBarsStyle = {
  fontSize: '2rem',
  height: '45px',
  marginLeft: '10px'
}

const toolbar = ( props ) => (
  <header>
    <FaBars style={FaBarsStyle} onClick={() => alert('Hamburger clicked!')}/>
    <nav>
      {/* <NavigationItems /> */}
    </nav>
  </header>
);

export default toolbar;