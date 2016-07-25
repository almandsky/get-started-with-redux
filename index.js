import React from 'react';
import ReactDOM from 'react-dom';
import { makeStore } from './reducers/todos';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

const TodoApp = ({
  store
}) => (
  <div>
    <AddTodo
      store={store}
    />
    <VisibleTodoList
      store={store}
    />
    <Footer
      store={store}
    />
  </div>
);

TodoApp.propTypes = {
  store: React.PropTypes.object.isRequired
};

ReactDOM.render(
  <TodoApp store={makeStore()} />,
  document.getElementById('root')
);

