import React from 'react';

const { PropTypes } = React;

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  console.log('testing');
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >{children}
    </a>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default FilterLink;
