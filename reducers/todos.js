import { createStore } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.reduce((maxId, todoItem) => Math.max(todoItem.id, maxId), -1) + 1,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

// Implement the combineReducers

const combineReducers = (reducers) =>
  (state = {}, action) =>
    Object.keys(reducers).reduce(
      (nextState, key) => {
        const newState = nextState;
        newState[key] = reducers[key](
          state[key],
          action
        );
        return newState;
      },
      {}
    );


// Make use of the combineReducers from redux

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export function makeStore() {
  return createStore(todoApp);
}
