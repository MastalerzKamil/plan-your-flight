import * as actionNames from 'constants/dateFilterActionTypes';

export default function (state = {}, action) {
  console.log(state)
  switch (action.type) {
    case actionNames.SET_START_DATE: {
      return {
        ...state,
        startDate: action.payload,
      };
    }
    case actionNames.CLEAR_START_DATE: {
      return {
        ...state,
        startDate: '',
      };
    }
    case actionNames.SET_END_DATE: {
      return {
        ...state,
        endDate: action.payload,
      };
    }
    case actionNames.CLEAR_END_DATE: {
      return {
        ...state,
        endDate: '',
      };
    }
    default:
      return state;
  }
}
