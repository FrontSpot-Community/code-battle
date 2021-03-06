import {
  SUBMIT_SOLUTION_FETCH,
  SUBMIT_SOLUTION_FETCH_FAILED,
  SUBMIT_SOLUTION_FETCH_SUCCESS,
  SOLUTION_BY_TASK_ID_FETCH,
  SOLUTION_BY_TASK_ID_FETCH_SUCCESS,
  SOLUTION_BY_TASK_ID_FETCH_FAILED
} from '../../client/actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  result: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SUBMIT_SOLUTION_FETCH:
    return {
      ...state,
      isSubmitLoading: true
    };
  case SUBMIT_SOLUTION_FETCH_SUCCESS:
    return {
      ...state,
      result: action.payload,
      isSubmitLoading: false
    };
  case SUBMIT_SOLUTION_FETCH_FAILED:
    return {
      ...state,
      result: null,
      error: action.error && action.error.data || 'Solution fetch failed',
      isSubmitLoading: false
    };

  case SOLUTION_BY_TASK_ID_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case SOLUTION_BY_TASK_ID_FETCH_SUCCESS:
    return {
      ...state,
      result: action.payload,
      isLoading: false
    };
  case SOLUTION_BY_TASK_ID_FETCH_FAILED:
    return {
      ...state,
      result: null,
      error: action.error && action.error.data || 'Solution fetch failed',
      isLoading: false
    };

  default:
    return state;
  }
};
