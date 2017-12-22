import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING,
  TOURNAMENTS_FETCH_REQUESTED
} from '../actions';

export const tournamentsLoading = () => {
  return {
    type: TOURNAMENTS_LOADING
  };
};

export const fetchSuccess = (tournaments) => {
  return {
    type: TOURNAMENTS_FETCH_SUCCESS,
    tournaments
  };
};

export const fetchFailed = (error) => {
  return {
    type: TOURNAMENTS_FETCH_FAILED,
    error
  };
};

export const tournamentsRequest = (data) => ({
  type: TOURNAMENTS_FETCH_REQUESTED,
  payload: data
});
