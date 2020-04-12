import React, { Component } from 'react';
import './App.css';
import MainMenu from './containers/MainMenu/MainMenu';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <Layout>
        <MainMenu />
      </Layout>
    );
  }
}

export default App;
