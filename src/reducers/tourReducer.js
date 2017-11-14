import {TOURS_FETCH_SUCCESS} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case TOURS_FETCH_SUCCESS:
      return [
        ...action.tours
    ];
    default:
      return state;
  }
};
