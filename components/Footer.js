import React from 'react';
import FilterLink from './FilterLink';

const { PropTypes } = React;

const Footer = ({
  store
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter="SHOW_ALL"
      store={store}
    >All</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_ACTIVE"
      store={store}
    >Active</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_COMPLETED"
      store={store}
    >Completed</FilterLink>
  </p>
);

Footer.propTypes = {
  store: PropTypes.object.isRequired
};

export default Footer;
