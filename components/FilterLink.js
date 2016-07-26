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
/*
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

FilterLink.contextTypes = {
  store: PropTypes.object
};
*/
export default FilterLink;
