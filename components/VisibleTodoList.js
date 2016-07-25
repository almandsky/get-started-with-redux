import React, { Component } from 'react';
import TodoList from './TodoList';
const { PropTypes } = React;

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const store = props.store;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

VisibleTodoList.propTypes = {
  store: PropTypes.object.isRequired
};

export default VisibleTodoList;
