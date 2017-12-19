import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED,
  TOURNAMENTS_LOADING
} from '../constants';

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
