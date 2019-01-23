import React, {Component} from 'react'
import { inject, observer } from 'mobx-react';
import Todo from '../Todo/Todo'

@inject('TodoStore')
@observer
class FullTodo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todo: props.TodoStore.todos.find(todo => todo.id === props.match.params.id)
    }

  }
  render () {
    return (
      <div>
        {this.state.todo && <Todo id={this.state.todo.id} title={this.state.todo.title} description={this.state.todo.description} />}
        {!this.state.todo && (
          <span>Aucune todo ne correspond à cet ID</span>
        )}
      </div>
    )
  }
}

export default FullTodo