import React from 'react';
import ReactDOM from 'react-dom';
import { makeStore } from './reducers/todos';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
const { Component } = React;

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.array.isRequired
};

Provider.childContextTypes = {
  store: React.PropTypes.object
};

TodoApp.propTypes = {
  store: React.PropTypes.object.isRequired
};

ReactDOM.render(
  <Provider store={makeStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

