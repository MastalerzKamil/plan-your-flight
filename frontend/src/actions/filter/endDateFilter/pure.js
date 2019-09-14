import * as types from 'constants/dateFilterActionTypes';

// eslint-disable-next-line
export const setEndDate = date => ({ type: types.SET_END_DATE, payload: date });
export const clearEndDate = date => ({ type: types.CLEAR_END_DATE, payload: date });