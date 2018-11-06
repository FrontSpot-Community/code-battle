import {Actions} from './actionCreator';
import {
  TASK_BY_ID_FETCH,
  TASK_UPDATE,
  TASK_DELETE,
  TASKS_FETCH,
  TASKS_BY_ID_FETCH,
  TASK_ADD
} from '../actions';

const tasksActions = new Actions(TASKS_FETCH);
const taskByIdActions = new Actions(TASK_BY_ID_FETCH);
const tasksByIdActions = new Actions(TASKS_BY_ID_FETCH);
const taskByIdEditActions = new Actions(TASK_UPDATE);
const taskByIdDeleteActions = new Actions(TASK_DELETE);
const taskAddActions = new Actions(TASK_ADD);

export const taskUpdate = taskByIdEditActions.request;
export const taskUpdateSuccess = taskByIdEditActions.success;
export const taskUpdateFailed = taskByIdEditActions.failed;

export const taskDelete = taskByIdDeleteActions.request;
export const taskDeleteSuccess = taskByIdDeleteActions.success;
export const taskDeleteFailed = taskByIdDeleteActions.failed;

export const tasksRequest = tasksActions.request;
export const tasksFetchSuccess = tasksActions.success;
export const tasksFetchFailed = tasksActions.failed;

export const taskByIdRequest = taskByIdActions.request;
export const taskByIdFetchSuccess = taskByIdActions.success;
export const taskByIdFetchFailed = taskByIdActions.failed;

export const tasksByIdRequest = tasksByIdActions.request;
export const tasksByIdFetchSuccess = tasksByIdActions.success;
export const tasksByIdFetchFailed = tasksByIdActions.failed;

export const taskAdd = taskAddActions.request;
export const taskAddSuccess = taskAddActions.success;
export const taskAddFailed = taskAddActions.failed;
