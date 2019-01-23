import React, { Component } from 'react';
import Todo from '../Todo/Todo'
import AddTodo from '../AddTodo/AddTodo'
import { fetchTodoList } from '../../helpers/apiHelper'
import Loader from '../Loader/Loader'
import { inject, observer } from 'mobx-react'

@inject('TodoStore')
@observer
class TodoList extends Component {
  render () {
    return (
      <div>
        <h1>Mes TODOs</h1>

        {this.props.TodoStore.todos.length === 0 && <Loader />}
        
        <ul>
          {this.props.TodoStore.todos.map((todo, index) => (
            <Todo key={todo.id} 
              id={todo.id}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </ul>

        <AddTodo />
      </div>
    )
  }

  componentDidMount () {
    fetchTodoList()
    .then(response => {
      console.log(response.todos)
      console.log(this.props.TodoStore)
      this.props.TodoStore.setTodos(response.todos)
    })
  }
}

export default TodoList