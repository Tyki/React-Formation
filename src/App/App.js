import React, { Component } from 'react';
import './App.css';
import Login from '../Authentication/Login/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      isLogged: false,
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
