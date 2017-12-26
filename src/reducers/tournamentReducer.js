import {
  TOURNAMENTS_FETCH,
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENT_BY_ID_FETCH,
  TOURNAMENT_BY_ID_FETCH_SUCCESS,
  TOURNAMENT_BY_ID_FETCH_FAILED
} from '../actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  count: 0,
  tournamentById: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TOURNAMENTS_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case TOURNAMENTS_FETCH_SUCCESS:
    return {
      ...state,
      data: [...action.payload.data],
      isLoading: false,
      count: action.payload.count
    };
  case TOURNAMENTS_FETCH_FAILED:
    return {
      ...state,
      error: action.error,
      isLoading: !state.isLoading
    };
  case TOURNAMENT_BY_ID_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case TOURNAMENT_BY_ID_FETCH_SUCCESS:
    return {
      ...state,
      tournamentById: action.payload,
      isLoading: false
    };
  case TOURNAMENT_BY_ID_FETCH_FAILED:
    return {
      ...state,
      tournamentById: null,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};
