import {TOURNAMENTS_FETCH_SUCCESS} from '../constants';

export const fetchSuccess = (tournaments) => {
  return {
    type: TOURNAMENTS_FETCH_SUCCESS,
    tournaments
  };
};
