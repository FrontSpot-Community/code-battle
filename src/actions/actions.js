import {createFetchActions} from './action_creators/actionCreator';

export const [
  TOURNAMENTS_FETCH,
  TOURNAMENTS_FETCH_SUCCESS,
  TOURNAMENTS_FETCH_FAILED
] = createFetchActions('TOURNAMENTS_FETCH');

export const SOLUTION_LOADING = 'SOLUTION_LOADING';
export const [
  SOLUTION_FETCH,
  SOLUTION_FETCH_SUCCESS,
  SOLUTION_FETCH_FAILED
] = createFetchActions('SOLUTION_FETCH');

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
  TASKS_FETCH,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_FAILED
] = createFetchActions('TASKS_FETCH');

export const [
  TASKS_BY_ID_FETCH,
  TASKS_BY_ID_FETCH_SUCCESS,
  TASKS_BY_ID_FETCH_FAILED
] = createFetchActions('TASKS_BY_ID_FETCH');
