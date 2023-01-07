import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Pews from './Components/Pews';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar />
        <Pews pageSize={5}/>
      </div>
      </>
    )
  }
}

