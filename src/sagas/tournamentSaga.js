import {call, put, takeEvery} from 'redux-saga/effects';
import {getTournamentById, gettAllTournamnets} from '../api/tournaments';

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
    const tournaments = yield call(gettAllTournamnets);

    yield put(tournamentsFetchSuccess(tournaments));
  } catch (error) {
    yield put(tournamentsFetchFailed(error.data));
  }
}

function* fetchTournamentById({payload}) {
  try {
    const tournament = yield call(getTournamentById, payload.id, payload.params);
    let opened = 0;
    let resolved = 0;
    tournament.taskIds.forEach((item) => {
      item.status === 'open' && opened++;
      item.status === 'resolved' && resolved++;
    });
    tournament.solving = opened ? Math.round(resolved / opened) : 100;
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
