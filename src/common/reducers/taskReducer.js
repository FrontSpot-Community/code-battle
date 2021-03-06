import {
  TASKS_FETCH,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_FAILED,
  TASK_BY_ID_FETCH,
  TASK_BY_ID_FETCH_SUCCESS,
  TASK_BY_ID_FETCH_FAILED,
  TASKS_BY_ID_FETCH,
  TASKS_BY_ID_FETCH_SUCCESS,
  TASKS_BY_ID_FETCH_FAILED,
  TASK_UPDATE,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_FAILED,
  TASK_DELETE,
  TASK_DELETE_SUCCESS,
  TASK_DELETE_FAILED,
  TASK_ADD,
  TASK_ADD_SUCCESS,
  TASK_ADD_FAILED
} from '../../client/actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  count: 0,
  tasksById: [],
  task: null
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
  case TASK_UPDATE:
    return {
      ...state,
      isLoading: true
    };
  case TASK_UPDATE_SUCCESS:
    return {
      ...state,
      taskById: action.payload,
      isLoading: false
    };
  case TASK_UPDATE_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  case TASK_DELETE:
    return {
      ...state,
      isLoading: true
    };
  case TASK_DELETE_SUCCESS:
    return {
      ...state,
      isLoading: false,
      tasksById: state.tasksById ?
        state.tasksById.filter((task) => task.id !== action.payload.id) : []
    };
  case TASK_DELETE_FAILED:
    return {
      ...state,
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
  case TASK_ADD:
    return {
      ...state,
      isLoading: true
    };
  case TASK_ADD_SUCCESS:
    return {
      ...state,
      isLoading: false,
      taskById: action.payload
    };
  case TASK_ADD_FAILED:
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
