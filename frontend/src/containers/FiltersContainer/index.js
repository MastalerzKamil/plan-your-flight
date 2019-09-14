import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from 'components/Filters';
import FilterActions from 'actions/filter'

const mapStateToProps = state => ({
  flightFilter: state.flightFilterReducer,
  dateFilter: state.dateFilterReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...FilterActions,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
