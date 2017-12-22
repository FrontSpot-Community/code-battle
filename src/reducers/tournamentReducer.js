import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING
} from '../actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  count: 0
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
      data: action.tournaments.data,
      isLoading: !state.isLoading,
      count: action.tournaments.count
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
