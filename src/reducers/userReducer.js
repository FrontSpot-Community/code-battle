import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED
} from '../actions/actions';

const initialState = {
  isLoading: false,
  userInfo: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case USER_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      userInfo: {...action.payload}
    };
  case USER_FETCH_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
      userInfo: null
    };
  default: {
    return state;
  }
  }
};
