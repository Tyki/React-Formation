import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import FullTodo from './components/FullTodo/FullTodo'
import { Provider } from 'mobx-react'
import { todoStore } from './store/TodoStore'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch'

ReactDOM.render(
  <Provider
    TodoStore={todoStore}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/todo/:id" exact component={FullTodo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      
    </Router>
  </Provider>
, document.getElementById('root'));
