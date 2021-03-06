import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { todos, makeStore } from '../../reducers/todos';
import { addTodo, toggleTodo, setVisibilityFilter } from '../../actions';

describe('reducers', () => {
  it('add todo', () => {
    const stateBefore = [];
    const action = addTodo('Learn Redux');
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('add two todos', () => {
    const stateBefore = [{
      id: 0,
      text: 'Learn Redux',
      completed: false
    }];
    const action = addTodo('Go Shopping');
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go Shopping',
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('toggle todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false
      }
    ];
    const action = toggleTodo(1);
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('use store to add todo', () => {
    // Initial state
    // console.log(store.getState());
    const store = makeStore();

    const initialState = { todos: [], visibilityFilter: 'SHOW_ALL' };
    expect(store.getState()).to.deep.equal(initialState);

    // Add todo
    store.dispatch(addTodo('Learn Redux'));
    const stateAddTodo = {
      todos: [
        { id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    };

    expect(store.getState()).to.deep.equal(stateAddTodo);

    // Add another todo
    store.dispatch(addTodo('Go shopping'));

    const stateAddAnotherTodo = {
      todos: [
        { id: 0,
          text: 'Learn Redux',
          completed: false
        },
        { id: 1,
          text: 'Go shopping',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    };

    expect(store.getState()).to.deep.equal(stateAddAnotherTodo);

    // Toggle todo

    store.dispatch(toggleTodo(1));

    const stateToggleTodo = {
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
      visibilityFilter: 'SHOW_ALL'
    };

    expect(store.getState()).to.deep.equal(stateToggleTodo);

    // Update filter

    store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

    const stateUpdateFilter = {
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
      visibilityFilter: 'SHOW_COMPLETED'
    };

    expect(store.getState()).to.deep.equal(stateUpdateFilter);
  });
});
