import React from 'react';

const { PropTypes } = React;

const AddTodo = ({
  store
}) => {
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
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value
          });
          input.value = '';
        }}
      >Add Todo</button>
    </div>
  );
};

AddTodo.propTypes = {
  store: PropTypes.object.isRequired
};

export default AddTodo;
