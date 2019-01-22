import React, { Component } from 'react';
import './App.css';
import Login from '../Authentication/Login/Login'
import TodoList from '../TodoList/TodoList'

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
        {!this.state.isLogged ? <Login /> :  <TodoList /> }
      </div>
    );
  }
}

export default App;
