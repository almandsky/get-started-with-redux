import { connect } from 'react-redux';
import React from 'react';
import { addTodo } from '../actions';

const AddTodoNode = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >Add Todo</button>
    </div>
  );
};

const AddTodo = connect()(AddTodoNode);

AddTodoNode.propTypes = {
  dispatch: React.PropTypes.func
};

export default AddTodo;
