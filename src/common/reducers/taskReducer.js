import {
  TASKS_FETCH,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_FAILED,
  TASK_BY_ID_FETCH,
  TASK_BY_ID_FETCH_SUCCESS,
  TASK_BY_ID_FETCH_FAILED,
  TASKS_BY_ID_FETCH,
  TASKS_BY_ID_FETCH_SUCCESS,
  TASKS_BY_ID_FETCH_FAILED
} from '../../client/actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  count: 0,
  tasksById: [],
  taskById: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TASKS_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case TASKS_FETCH_SUCCESS:
    return {
      ...state,
      data: [...action.payload.data],
      isLoading: false
    };
  case TASKS_FETCH_FAILED:
    return {
      ...state,
      error: action.error,
      isLoading: !state.isLoading
    };
  case TASKS_BY_ID_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case TASKS_BY_ID_FETCH_SUCCESS:
    return {
      ...state,
      tasksById: action.payload,
      isLoading: false
    };
  case TASKS_BY_ID_FETCH_FAILED:
    return {
      ...state,
      tasksById: null,
      isLoading: false,
      error: action.error
    };
  case TASK_BY_ID_FETCH:
    return {
      ...state,
      isLoading: true
    };
  case TASK_BY_ID_FETCH_SUCCESS:
    return {
      ...state,
      taskById: action.payload,
      isLoading: false
    };
  case TASK_BY_ID_FETCH_FAILED:
    return {
      ...state,
      taskById: null,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};
