import React, { Component } from 'react';
import './App.css';
import Login from '../Authentication/Login/Login'
import TodoList from '../TodoList/TodoList'
import { inject, observer } from 'mobx-react';
import { fetchTodoList } from '../../helpers/apiHelper'

@inject('TodoStore')
@observer
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
        {!this.state.isLogged ? <Login onLogin={this.handleLogin}/> :  <TodoList /> }
      </div>
    );
  }

  handleLogin = (isLogged) => {
    this.props.TodoStore.setLogged(isLogged)

    fetchTodoList()
    .then(response => {
      this.props.TodoStore.setTodos(response.todos)
    })
  }
}

export default App;
