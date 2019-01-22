import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="username"
            label="Username"
            value={this.state.username}
            onChange={this.handleChange('username')}
            margin="normal"
          />

          <TextField
            id="password"
            label="Mot de passe"
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin="normal"
          />

          <Button type="button" onClick={this.onSubmit}>
            Se connecter
          </Button>
        </form>
      </div>
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.username !== '' && this.password !== '') {
      console.log('je suis connecté')
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
}

export default Login;
