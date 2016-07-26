import { connect } from 'react-redux';
import Link from './Link';


const mapStateToProps = (
  state,
  ownProps
) => (
  {
    active: ownProps.filter === state.visibilityFilter
  }
);
const mapDispatchToProps = (
  dispatch,
  ownProps
) => (
  {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  }
);
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
