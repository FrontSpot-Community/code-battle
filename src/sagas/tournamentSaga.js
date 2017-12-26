import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {getTournamentById} from '../api/tournaments';
import tournamentsMock from '../api/mocks/tournaments.mock';

import {
  tournamentsFetchSuccess,
  tournamentsFetchFailed,
  tournamentsLoading,
  tournamentsByIdFetchSuccess,
  tournamentsByIdFetchFailed
} from '../actions/action_creators/tournamentActionCreators';

import {
  TOURNAMENTS_FETCH_REQUESTED,
  TOURNAMENT_BY_ID_FETCH_REQUESTED
} from '../actions/actions';

function* fetchTournaments() {
  try {
    yield put(showLoading());
    yield put(tournamentsLoading());
    const tournaments = yield call(tournamentsMock.fetchAll);
    yield put(tournamentsFetchSuccess(tournaments));
  } catch (e) {
    yield put(tournamentsFetchFailed(e));
  } finally {
    yield put(hideLoading());
  }
}

function* fetchTournamentById({payload}) {
  try {
    yield put(showLoading());
    const tournament = yield call(getTournamentById, payload.id, payload.params);
    yield put(tournamentsByIdFetchSuccess(tournament));
  } catch (e) {
    yield put(tournamentsByIdFetchFailed(e));
  } finally {
    yield put(hideLoading());
  }
}

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH_REQUESTED, fetchTournaments);
  yield takeEvery(TOURNAMENT_BY_ID_FETCH_REQUESTED, fetchTournamentById);
}

export default tournamentSaga;
