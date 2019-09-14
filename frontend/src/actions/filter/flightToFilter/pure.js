import * as types from 'constants/flightFilterActionTypes';

export const setToFlight = flight => ({ type: types.SET_FROM, payload: flight });
export const clearToFlight = flight => ({ type: types.CLEAR_FROM, payload: flight });