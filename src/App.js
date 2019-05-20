  
import React, { Component } from 'react';
import Home from "./components/Home";
import Navbar from './components/Navbar'
//Importar CSS Bootstrap
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css';


class App extends Component {
  render() {
    return (
        <React.Fragment>  
          <Navbar />
          <Home file = {this.props.file}/>
       
      </React.Fragment>
    );
  }
}

export default App;
