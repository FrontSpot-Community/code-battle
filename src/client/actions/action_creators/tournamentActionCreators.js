import {Actions} from './actionCreator';
import {
  TOURNAMENTS_FETCH,
  TOURNAMENT_BY_ID_FETCH
} from '../actions';

const tournamentsActions = new Actions(TOURNAMENTS_FETCH);
const tournamentByIdActions = new Actions(TOURNAMENT_BY_ID_FETCH);

export const tournamentsRequest = tournamentsActions.request;
export const tournamentsFetchSuccess = tournamentsActions.success;
export const tournamentsFetchFailed = tournamentsActions.failed;


export const tournamentsByIdRequest = tournamentByIdActions.request;
export const tournamentsByIdFetchSuccess = tournamentByIdActions.success;
export const tournamentsByIdFetchFailed = tournamentByIdActions.failed;
