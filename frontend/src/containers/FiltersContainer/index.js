import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from 'components/Filters';

const mapStateToProps = state => ({
  displayDialog: state.modalReducer,
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
