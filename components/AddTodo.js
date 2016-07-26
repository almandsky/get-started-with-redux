import { connect } from 'react-redux';
import React from 'react';

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
          dispatch({
            type: 'ADD_TODO',
            text: input.value
          });
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
