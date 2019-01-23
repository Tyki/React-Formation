import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  render () {
    return (
      <div>
        <input id="addTodo" type="text" value={this.state.title} onChange={this.handleChange('title')} />
        <label htmlFor="addTodo">Titre</label>

        <textarea onChange={this.handleChange('description')} value={this.state.description}></textarea>
        <label htmlFor="addTodo">Titre</label>

        <button type="button" onClick={() => this.props.onAdd(this.state)}>Ajouter une todo</button>
      </div>
    )
  }


  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
}

export default AddTodo