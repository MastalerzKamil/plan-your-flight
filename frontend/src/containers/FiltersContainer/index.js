import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from 'components/Filters';

const mapStateToProps = state => ({
  startDate: state.categoryFilterReducer,
  endDate: state.snakerSizeFilterReducer,
  fromFlight: state.topsSizeFilterReducer,
  toFlight: state.searchFilterReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...ModalActions,
    ...CheckoutActions,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
