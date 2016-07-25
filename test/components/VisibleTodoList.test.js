import React from 'react';
import TestUtils from 'react-addons-test-utils';
import VisibleTodoList from '../../components/VisibleTodoList';
import TodoList from '../../components/TodoList';
import expect from 'expect';

function setup(selectedFilter = 'SHOW_ALL') {
  const props = {
    todos: [
      { id: 0,
        text: 'Learn Redux',
        completed: false
      },
      { id: 1,
        text: 'Go shopping',
        completed: true
      }
    ],
    visibilityFilter: selectedFilter,
    store: {
      getState: function get() {
        return {};
      }
    }
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <VisibleTodoList {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('VisibleTodoList Components', () => {
  it('renders a VisibleTodoList', () => {
    const { output } = setup();
    expect(output.type).toBe(TodoList);
  });
});
