import {call, put, takeEvery} from 'redux-saga/effects';
import {getTournamentById} from '../api/tournaments';
import tournamentsMock from '../api/mocks/tournaments.mock';

import {
  tournamentsFetchSuccess,
  tournamentsFetchFailed,
  tournamentsByIdFetchSuccess,
  tournamentsByIdFetchFailed
} from '../actions/action_creators/tournamentActionCreators';

import {
  TOURNAMENTS_FETCH,
  TOURNAMENT_BY_ID_FETCH
} from '../actions/actions';

function* fetchTournaments() {
  try {
    const tournaments = yield call(tournamentsMock.fetchAll);
    yield put(tournamentsFetchSuccess(tournaments));
  } catch (e) {
    yield put(tournamentsFetchFailed(e));
  }
}

function* fetchTournamentById({payload}) {
  try {
    const tournament = yield call(getTournamentById, payload.id, payload.params);
    yield put(tournamentsByIdFetchSuccess(tournament));
  } catch (e) {
    yield put(tournamentsByIdFetchFailed(e));
  }
}

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH, fetchTournaments);
  yield takeEvery(TOURNAMENT_BY_ID_FETCH, fetchTournamentById);
}

export default tournamentSaga;
