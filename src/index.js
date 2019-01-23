import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'mobx-react'
import { todoStore } from './store/TodoStore'
ReactDOM.render(
  <Provider
    TodoStore={todoStore}>
    <App />
  </Provider>
, document.getElementById('root'));
