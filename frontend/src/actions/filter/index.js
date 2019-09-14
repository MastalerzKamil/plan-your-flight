import * as endDateActions from 'actions/filter/endDateFilter/pure';
import * as startDateActions from 'actions/filter/startDate/pure';
import * as flightFromActions from 'actions/filter/flightFromFilter/pure';
import * as flightToActions from 'actions/filter/flightToFilter/pure';

const actions = Object.assign(
  {},
  endDateActions,
  startDateActions,
  flightFromActions,
  flightToActions,
);

export default actions;
