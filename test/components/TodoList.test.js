import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TodoList from '../../components/TodoList';


function setup() {
  const props = {
    todos: [{
      id: 0,
      text: 'Use Redux',
      completed: false
    }],
    onTodoClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TodoList {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('TodoList Components', () => {
  it('renders a TodoList', () => {
    const { output } = setup();
    expect(output.type).toBe('ul');
  });
});
