import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING,
  TOURNAMENTS_FETCH_REQUESTED,
  TOURNAMENT_BY_ID_FETCH_FAILED,
  TOURNAMENT_BY_ID_FETCH_SUCCESS,
  TOURNAMENT_BY_ID_FETCH_REQUESTED
} from '../actions';

export const tournamentsLoading = () => {
  return {
    type: TOURNAMENTS_LOADING
  };
};

export const tournamentsFetchSuccess = (tournaments) => {
  return {
    type: TOURNAMENTS_FETCH_SUCCESS,
    tournaments
  };
};

export const tournamentsFetchFailed = (error) => {
  return {
    type: TOURNAMENTS_FETCH_FAILED,
    error
  };
};

export const tournamentsRequest = (data) => ({
  type: TOURNAMENTS_FETCH_REQUESTED,
  payload: data
});


export const tournamentsByIdFetchSuccess = (tournament) => ({
  type: TOURNAMENT_BY_ID_FETCH_SUCCESS,
  payload: tournament
});

export const tournamentsByIdFetchFailed = (error) => {
  return {
    type: TOURNAMENT_BY_ID_FETCH_FAILED,
    payload: error
  };
};

export const tournamentsByIdRequest = (data) => ({
  type: TOURNAMENT_BY_ID_FETCH_REQUESTED,
  payload: data
});
