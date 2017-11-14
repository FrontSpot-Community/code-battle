import {TOURS_FETCH_SUCCESS} from '../constants';

export const fetchSuccess = (tours) => {
  return {
    type: TOURS_FETCH_SUCCESS,
    tours
  };
};
