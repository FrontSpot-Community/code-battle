import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED
} from '../constants';

const initialState = {
    isLoading: false,
    error: null,
    data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOURNAMENTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.tournaments
      };
    case TOURNAMENTS_FETCH_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
