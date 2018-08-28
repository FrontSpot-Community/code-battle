import {createFetchActions} from './action_creators/actionCreator';

export const [
  TOURNAMENTS_FETCH,
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED
] = createFetchActions('TOURNAMENTS_FETCH');

export const [
  SUBMIT_SOLUTION_FETCH,
  SUBMIT_SOLUTION_FETCH_SUCCESS,
  SUBMIT_SOLUTION_FETCH_FAILED
] = createFetchActions('SUBMIT_SOLUTION_FETCH');

export const [
  SOLUTION_BY_TASK_ID_FETCH,
  SOLUTION_BY_TASK_ID_FETCH_SUCCESS,
  SOLUTION_BY_TASK_ID_FETCH_FAILED
] = createFetchActions('SOLUTION_BY_TASK_ID_FETCH');

export const [
  TOURNAMENT_BY_ID_FETCH,
  TOURNAMENT_BY_ID_FETCH_SUCCESS,
  TOURNAMENT_BY_ID_FETCH_FAILED
] = createFetchActions('TOURNAMENT_BY_ID_FETCH');

export const [
  TASK_BY_ID_FETCH,
  TASK_BY_ID_FETCH_SUCCESS,
  TASK_BY_ID_FETCH_FAILED
] = createFetchActions('TASK_BY_ID_FETCH');

export const [
  TASK_UPDATE,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_FAILED
] = createFetchActions('TASK_UPDATE');

export const [
  TASK_DELETE,
  TASK_DELETE_SUCCESS,
  TASK_DELETE_FAILED
] = createFetchActions('TASK_DELETE');

export const [
  TASKS_FETCH,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_FAILED
] = createFetchActions('TASKS_FETCH');

export const [
  TASKS_BY_ID_FETCH,
  TASKS_BY_ID_FETCH_SUCCESS,
  TASKS_BY_ID_FETCH_FAILED
] = createFetchActions('TASKS_BY_ID_FETCH');

export const [
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED
] = createFetchActions('USER_FETCH');

export const USER_LOADING = 'USER_LOADING';
export const [
  USER_PUT
] = createFetchActions('USER_PUT');

export const [
  USERS_FETCH,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILED
] = createFetchActions('USERS_FETCH');
