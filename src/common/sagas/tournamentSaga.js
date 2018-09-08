import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getTournamentById,
  gettAllTournamnets,
  updateTournamentById,
  deleteTournamentById
} from '../api/tournaments';

import {
  tournamentsFetchSuccess,
  tournamentsFetchFailed,
  tournamentsByIdFetchSuccess,
  tournamentsByIdFetchFailed,
  tournamentUpdateSuccess,
  tournamentUpdateFailed,
  tournamentDeleteSuccess,
  tournamentDeleteFailed
} from '../../client/actions/action_creators/tournamentActionCreators';

import {
  TOURNAMENTS_FETCH,
  TOURNAMENT_BY_ID_FETCH,
  TOURNAMENT_UPDATE,
  TOURNAMENT_DELETE
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
  } catch (error) {
    yield put(tournamentDeleteFailed(error.data));
  }
}

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH, fetchTournaments);
  yield takeEvery(TOURNAMENT_BY_ID_FETCH, fetchTournamentById);
  yield takeEvery(TOURNAMENT_UPDATE, updateTournament);
  yield takeEvery(TOURNAMENT_DELETE, deleteTournament);
}

export default tournamentSaga;
