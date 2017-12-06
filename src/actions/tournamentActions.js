import {
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED
} from '../constants';

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
