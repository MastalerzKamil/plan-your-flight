import * as types from 'constants/flightFilterActionTypes';

// eslint-disable-next-line
export const setFromFlight = flight => ({ type: types.SET_FROM, payload: flight });
export const clearfromFlight = flight => ({ type: types.CLEAR_FROM, payload: flight });