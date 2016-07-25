import React, { Component } from 'react';
import Link from './Link';
const { PropTypes } = React;

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}

FilterLink.propTypes = {
  store: PropTypes.object.isRequired
};

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;
