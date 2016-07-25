import React from 'react';
import TestUtils from 'react-addons-test-utils';
const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils;
import FilterLink from '../../components/FilterLink';
import expect from 'expect';
import { makeStore } from '../../reducers/todos';
import stubContext from 'react-stub-context';

let component = undefined;
const store = makeStore();
describe('FilterLink Components', () => {
  beforeEach(() => {
    let TestFilterLink = stubContext(FilterLink, { store });
    component = renderIntoDocument(
      <TestFilterLink
        filter="SHOW_COMPLETED"
      >Completed</TestFilterLink>
    );
  });

  it('renders a FilterLink as link when not selected', () => {
    const link = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(link.length).toEqual(1);
    expect(link[0].textContent).toEqual('Completed');
  });

  it('FilterLink change from a link to span when it is clicked', () => {
    let link = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(link.length).toEqual(1);
    expect(link[0].textContent).toEqual('Completed');

    Simulate.click(link[0]);

    const span = scryRenderedDOMComponentsWithTag(component, 'span');
    expect(span.length).toEqual(1);
    expect(span[0].textContent).toEqual('Completed');

    link = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(link.length).toEqual(0);
  });
});
