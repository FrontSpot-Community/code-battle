import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getTournamentById,
  gettAllTournamnets,
  updateTournamentById,
  deleteTournamentById,
  addTournament as addNewTournament
} from '../api/tournaments';

import {
  tournamentsRequest,
  tournamentsFetchSuccess,
  tournamentsFetchFailed,
  tournamentsByIdFetchSuccess,
  tournamentsByIdFetchFailed,
  tournamentUpdateSuccess,
  tournamentUpdateFailed,
  tournamentDeleteSuccess,
  tournamentDeleteFailed,
  tournamentAddSuccess,
  tournamentAddFailed
} from '../../client/actions/action_creators/tournamentActionCreators';

import {
  TOURNAMENTS_FETCH,
  TOURNAMENT_BY_ID_FETCH,
  TOURNAMENT_UPDATE,
  TOURNAMENT_DELETE,
  TOURNAMENT_ADD
} from '../../client/actions/actions';

function* fetchTournaments() {
  try {
    const tournaments = yield call(gettAllTournamnets);

    yield put(tournamentsFetchSuccess(tournaments));
  } catch (error) {
    yield put(tournamentsFetchFailed(error.data));
  }
}

function* fetchTournamentById({payload}) {
  try {
    const tournament = yield call(getTournamentById, payload.id, payload.params);
    yield put(tournamentsByIdFetchSuccess(tournament));
  } catch (e) {
    yield put(tournamentsByIdFetchFailed(JSON.stringify(e)));
  }
}

function* updateTournament({payload}) {
  try {
    const tournament = yield call(updateTournamentById, payload._id, payload);
    yield put(tournamentUpdateSuccess(tournament));
  } catch (error) {
    yield put(tournamentUpdateFailed(error.data));
  }
}

function* deleteTournament({payload}) {
  try {
    const tournament = yield call(deleteTournamentById, payload);
    yield put(tournamentDeleteSuccess(tournament));
    yield put(tournamentsRequest());
  } catch (error) {
    yield put(tournamentDeleteFailed(error.data));
  }
}

function* addTournament({payload}) {
  try {
    const tournament = yield call(addNewTournament, payload);
    yield put(tournamentAddSuccess(tournament));
    yield put(tournamentsRequest());
  } catch (error) {
    yield put(tournamentAddFailed(error.data));
  }
}

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH, fetchTournaments);
  yield takeEvery(TOURNAMENT_BY_ID_FETCH, fetchTournamentById);
  yield takeEvery(TOURNAMENT_UPDATE, updateTournament);
  yield takeEvery(TOURNAMENT_DELETE, deleteTournament);
  yield takeEvery(TOURNAMENT_ADD, addTournament);
}

export default tournamentSaga;
