import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Todo from '../../components/Todo';
import expect from 'expect';

function setup() {
  const props = {
    onClick: expect.createSpy(),
    text: 'Use Redux',
    completed: false
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Todo {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Todo Components', () => {
  it('renders a Todo item', () => {
    const { output } = setup();
    expect(output.type).toBe('li');
  });
});
