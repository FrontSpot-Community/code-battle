import {Actions} from './actionCreator';
import {
  TOURNAMENTS_FETCH,
  TOURNAMENT_BY_ID_FETCH,
  TOURNAMENT_UPDATE,
  TOURNAMENT_DELETE,
  TOURNAMENT_ADD
} from '../actions';

const tournamentsActions = new Actions(TOURNAMENTS_FETCH);
const tournamentByIdActions = new Actions(TOURNAMENT_BY_ID_FETCH);
const tournamentByIdEditActions = new Actions(TOURNAMENT_UPDATE);
const tournamentByIdDeleteActions = new Actions(TOURNAMENT_DELETE);
const tournamentByIdAddActions = new Actions(TOURNAMENT_ADD);

export const tournamentsRequest = tournamentsActions.request;
export const tournamentsFetchSuccess = tournamentsActions.success;
export const tournamentsFetchFailed = tournamentsActions.failed;


export const tournamentsByIdRequest = tournamentByIdActions.request;
export const tournamentsByIdFetchSuccess = tournamentByIdActions.success;
export const tournamentsByIdFetchFailed = tournamentByIdActions.failed;

export const tournamentUpdate = tournamentByIdEditActions.request;
export const tournamentUpdateSuccess = tournamentByIdEditActions.success;
export const tournamentUpdateFailed = tournamentByIdEditActions.failed;

export const tournamentDelete = tournamentByIdDeleteActions.request;
export const tournamentDeleteSuccess = tournamentByIdDeleteActions.success;
export const tournamentDeleteFailed = tournamentByIdDeleteActions.failed;

export const tournamentAdd = tournamentByIdAddActions.request;
export const tournamentAddSuccess = tournamentByIdAddActions.success;
export const tournamentAddFailed = tournamentByIdAddActions.failed;

