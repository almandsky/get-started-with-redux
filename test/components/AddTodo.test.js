import React from 'react';
import TestUtils from 'react-addons-test-utils';
const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} = TestUtils;
import expect from 'expect';
import AddTodo from '../../components/AddTodo';
import { makeStore } from '../../reducers/todos';
import stubContext from 'react-stub-context';

let component = undefined;
const store = makeStore();

describe('AddTodo Components', () => {
  beforeEach(() => {
    let TestAddTodo = stubContext(AddTodo, { store });
    component = renderIntoDocument(
      <TestAddTodo />
    );
  });

  it('renders a AddTodo input and button', () => {
    const div = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(div.length).toEqual(1);

    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input.length).toEqual(1);

    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(button.length).toEqual(1);
  });
});
