import { combineReducers } from 'redux';
import flightFilterReducer from 'reducers/filter/flight';
import dateReducer from 'reducers/filter/date';

const rootReducer = combineReducers({
  flightFilterReducer,
  dateReducer,
});

export default rootReducer;