import * as types from 'constants/flightFilterActionTypes';

export const setToFlight = flight => ({ type: types.TO_FROM, payload: flight });
export const clearToFlight = flight => ({ type: types.TO_FROM, payload: flight });