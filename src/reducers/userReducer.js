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
