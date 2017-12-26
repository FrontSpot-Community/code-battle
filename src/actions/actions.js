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

