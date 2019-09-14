import * as types from 'constants/dateFilterActionTypes';

// eslint-disable-next-line
export const setStartDate = date => ({ type: types.SET_START_DATE, payload: date });
export const clearStartDate = date => ({ type: types.CLEAR_START_DATE, payload: date });