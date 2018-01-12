import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED,
  USER_LOADING
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
  case USER_LOADING:
    return {
      ...state,
      isLoading: true
    };
  default: {
    return state;
  }
  }
};
// import {
//   TOURNAMENTS_FETCH_SUCCESS,
//   TOURNAMENTS_FETCH_FAILED,
//   TOURNAMENTS_LOADING
// } from '../actions/actions';
//
// const initialState = {
//   isLoading: false,
//   error: null,
//   data: {}
// };
//
// export default (state = initialState, action) => {
//   switch (action.type) {
//   case APPLY_INITIAL_DATA:
//     return {
//       ...state,
//       isLoading: !state.isLoading
//     };
//   case UPDATE_PROFILE:
//     return {
//       ...state,
//       data: action.payload,
//       isLoading: !state.isLoading
//     };
//   case UPDATE_PROGRESS:
//     return {
//       ...state,
//       data: action.payload,
//       isLoading: !state.isLoading
//     };
//   default:
//     return state;
//   }
// };
