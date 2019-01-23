import React, { Component } from 'react'
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom'

@inject('TodoStore')
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      title: props.title,
      description: props.description
    }
  }

  render () {
    return (
      <li>
        {!this.state.editing && 
          <>
            <h4>{this.props.title}</h4>
            <span>{this.props.description}</span>

            <button type="button" onClick={this.deleteTodo}>Supprimer</button>
            <button type="button" onClick={() => this.setState({editing: true})}>Editer</button>
          </>  
        }

        {this.state.editing && 
          <>
            <input type='text' value={this.state.title} onChange={this.handleChange('title')} />
            <input type='text' value={this.state.description} onChange={this.handleChange('description')} />

            <button type="button" onClick={() => this.setState({editing: false})}>Annuler la modification</button>
            <button type="button" onClick={this.validateEdit}>Valider</button>
          </>
        }
        
        <Link to={'/todo/' + this.props.id}>Voir la fiche </Link>
      </li>
    )
  }

  deleteTodo = () => {
    this.props.TodoStore.deleteTodo(this.props.id)
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  validateEdit = () => {
    this.props.TodoStore.editTodo(this.props.id, this.state.title, this.state.description)
    this.setState({editing: false})
  }
}

export default Todo