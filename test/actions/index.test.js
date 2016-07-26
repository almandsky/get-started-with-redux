import { expect } from 'chai';
import { addTodo, toggleTodo, setVisibilityFilter } from '../../actions';

describe('actions', () => {
  it('add todo action', () => {
    const actionResult = {
      type: 'ADD_TODO',
      text: 'Learn Redux'
    };
    expect(addTodo('Learn Redux')).to.deep.equal(actionResult);
  });

  it('toggle todo action', () => {
    const actionResult = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    expect(toggleTodo(1)).to.deep.equal(actionResult);
  });

  it('set visibility filter action', () => {
    const actionResult = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    };
    expect(setVisibilityFilter('SHOW_COMPLETED')).to.deep.equal(actionResult);
  });
});
