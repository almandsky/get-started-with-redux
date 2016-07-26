import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeStore } from './reducers/todos';
import TodoApp from './containers/TodoApp';

ReactDOM.render(
  <Provider store={makeStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
