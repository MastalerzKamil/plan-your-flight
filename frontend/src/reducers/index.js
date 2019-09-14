import { combineReducers } from 'redux';
import fromFilterReducer from 'reducers/filter/from.js';
import toFilterReducer from 'reducers/filter/to.js';
import startDateReducer from 'reducers/filter/startDate.js';
import endDateReducer from 'reducers/filter/endDate.js';

const rootReducer = combineReducers({
  fromFilterReducer,
  toFilterReducer,
  startDateReducer,
  endDateReducer,
});

export default rootReducer;