import {TOURNAMENTS_FETCH_SUCCESS} from '../constants';

const initialState = {
    isLoading: false,
    error: null,
    data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOURNAMENTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.tournaments
      };
    default:
      return state;
  }
};
