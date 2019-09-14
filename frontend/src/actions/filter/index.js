import * as endDateActions from './endDateFilter/pure';
import * as startDateActions from './startDateFilter/pure';
import * as flightFromActions from './flightFromFilter/pure';
import * as flightToActions from './flightToFilter/pure';

const actions = Object.assign(
  {},
  endDateActions,
  startDateActions,
  flightFromActions,
  flightToActions,
);

export default actions;
