import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED,
  USER_LOADING,
  USERS_FETCH,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILED
} from '../../client/actions/actions';

const initialState = {
  isLoading: false,
  userInfo: null,
  error: null,
  users: []
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
  case USER_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case USERS_FETCH:
    return {
      ...state,
      isLoading: true
    };

  case USERS_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      users: [...action.payload]
    };
  case USERS_FETCH_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
      users: []
    };
  default: {
    return state;
  }
  }
};
