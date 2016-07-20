import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import AddTodo from '../../components/AddTodo';


function setup() {
  const props = {
    onAddClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <AddTodo {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('AddTodo Components', () => {
  it('renders a AddTodo input and button', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    const input = output.props.children[0];
    expect(input.type).toBe('input');
    const button = output.props.children[1];
    expect(button.type).toBe('button');
  });
});
