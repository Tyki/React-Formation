import React, { Component } from 'react';
// import uuidv4 from 'uuid/v4'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Ménage',
          description: 'Ne pas oublier de faire le ménage...'
        },
        {
          id: 2,
          title: 'Feuille de temps',
          description: 'La feuille de temps c\'est super important ! '
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <h1>Mes TODOs</h1>
        
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <h4>{todo.title}</h4>
              <span>{todo.description}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList