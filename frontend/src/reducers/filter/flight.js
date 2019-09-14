import * as actionNames from 'constants/flightFilterActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case actionNames.SET_FROM: {
      return {
        ...state,
        fromFlight: action.payload,
      };
    }
    case actionNames.CLEAR_FROM: {
      return {
        ...state,
        fromFlight: '',
      };
    }
    case actionNames.SET_TO: {
      return {
        ...state,
        toFlight: action.payload,
      };
    }
    case actionNames.CLEAR_TO: {
      return {
        ...state,
        toFlight: '',
      };
    }
    default:
      return state;
  }
}
