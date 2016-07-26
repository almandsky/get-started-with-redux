import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeStore } from './reducers/todos';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={makeStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

