import {call, put, takeEvery} from 'redux-saga/effects';
import {getTournamentById, gettAllTournamnets} from '../api/tournaments';
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
    const mock = yield call(tournamentsMock.fetchAll);
    const tournaments = yield call(gettAllTournamnets);
    const tournamentsData = tournaments || {count: 0, data: []};
    const allTournaments = {
      count: mock.count + tournamentsData.count,
      data: [...mock.data, ...tournamentsData.data]
    };
    yield put(tournamentsFetchSuccess(allTournaments));
  } catch (e) {
    yield put(tournamentsFetchFailed(e));
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

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH, fetchTournaments);
  yield takeEvery(TOURNAMENT_BY_ID_FETCH, fetchTournamentById);
}

export default tournamentSaga;
