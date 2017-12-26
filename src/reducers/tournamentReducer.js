import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING,
  TOURNAMENT_BY_ID_FETCH_REQUESTED,
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
  case TOURNAMENT_BY_ID_FETCH_REQUESTED:
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
      error: action.payload
    };
  default:
    return state;
  }
};
