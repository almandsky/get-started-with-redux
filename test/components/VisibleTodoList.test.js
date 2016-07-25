import React from 'react';
import TestUtils from 'react-addons-test-utils';
const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils;
import VisibleTodoList from '../../components/VisibleTodoList';
import expect from 'expect';
import { makeStore } from '../../reducers/todos';
import stubContext from 'react-stub-context';

let component = undefined;
const store = makeStore();


describe('VisibleTodoList Components', () => {
  beforeEach(() => {
    let TestVisibleTodoList = stubContext(VisibleTodoList, { store });
    component = renderIntoDocument(
      <TestVisibleTodoList
        store={store}
      />
    );
  });
  it('renders a VisibleTodoList', () => {
    const ul = scryRenderedDOMComponentsWithTag(component, 'ul');

    expect(ul.length).toEqual(1);

    const li = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(li.length).toEqual(0);
  });

  it('click a todo to add a line-through style', () => {
    store.dispatch({
      type: 'ADD_TODO',
      text: 'Learn Redux'
    });
    const ul = scryRenderedDOMComponentsWithTag(component, 'ul');

    expect(ul.length).toEqual(1);

    const li = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(li.length).toEqual(1);
    expect(li[0].textContent).toEqual('Learn Redux');
    expect(li[0].style.textDecoration).toEqual('none');
  });

  it('renders a VisibleTodoList with a todo', () => {
    store.dispatch({
      type: 'ADD_TODO',
      text: 'Go Shopping'
    });
    const ul = scryRenderedDOMComponentsWithTag(component, 'ul');

    expect(ul.length).toEqual(1);

    const li = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(li.length).toEqual(2);
    expect(li[0].textContent).toEqual('Learn Redux');
    expect(li[0].style.textDecoration).toEqual('none');
    expect(li[1].textContent).toEqual('Go Shopping');
    expect(li[1].style.textDecoration).toEqual('none');

    Simulate.click(li[1]);

    expect(li[1].textContent).toEqual('Go Shopping');
    expect(li[1].style.textDecoration).toEqual('line-through');
  });
});
