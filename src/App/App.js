import React, { Component } from 'react';
import './App.css';
import Login from '../Authentication/Login/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      isLogged: false,
    }
  }
  render() {
    return (
      <div className="App">
        {!this.state.isLogged ? <Login /> : 'COUCOU Je suis connecté '}
      </div>
    );
  }
}

export default App;
