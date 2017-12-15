import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING
} from '../constants';

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TOURNAMENTS_LOADING:
    return {
      ...state,
      isLoading: !state.isLoading
    };
  case TOURNAMENTS_FETCH_SUCCESS:
    return {
      ...state,
      data: action.tournaments,
      isLoading: !state.isLoading
    };
  case TOURNAMENTS_FETCH_FAILED:
    return {
      ...state,
      error: action.error,
      isLoading: !state.isLoading
    };
  default:
    return state;
  }
};
