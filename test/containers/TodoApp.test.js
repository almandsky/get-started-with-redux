import React from 'react';
import TestUtils from 'react-addons-test-utils';
const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} = TestUtils;
import TodoApp from '../../containers/TodoApp';
import expect from 'expect';
import { makeStore } from '../../reducers/todos';
import stubContext from 'react-stub-context';

let component = undefined;
const store = makeStore();


describe('TodoApp Containers', () => {
  beforeEach(() => {
    let TestTodoApp = stubContext(TodoApp, { store });
    component = renderIntoDocument(
      <TestTodoApp />
    );
  });
  it('renders a TodoApp', () => {
    const div = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(div.length).toEqual(2);

    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input.length).toEqual(1);
  });
});
