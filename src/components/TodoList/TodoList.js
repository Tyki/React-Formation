import React, { Component } from 'react';
import Todo from '../Todo/Todo'
import AddTodo from '../AddTodo/AddTodo'
import uuidv4 from 'uuid/v4'
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
              onDelete={this.handleDelete} 
              onEdit={this.handleEdit}
            />
          ))}
        </ul>

        <AddTodo onAdd={this.handleAdd} />
      </div>
    )
  }

  handleEdit = (id, title, description) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo
      } else {
        todo.title = title
        todo.description = description
        return todo
      }
    })

    this.setState({todos: newTodos})
  }

  handleDelete = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({todos: newTodos})
  }

  handleAdd = (todo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, {...todo, id: uuidv4()}]
    }))
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