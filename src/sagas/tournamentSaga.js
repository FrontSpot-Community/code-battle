import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {gettAllTournamnets} from '../api/tournaments';
import {
  fetchSuccess,
  fetchFailed,
  tournamentsLoading
} from '../actions/action_creators/tournamentActionCreators';

import {TOURNAMENTS_FETCH_REQUESTED} from '../actions/actions';

function* fetchTournaments() {
  try {
    yield put(showLoading());
    yield put(tournamentsLoading());
    const tournaments = yield call(gettAllTournamnets);
    yield put(fetchSuccess(tournaments));
  } catch (e) {
    yield put(fetchFailed(e));
  } finally {
    yield put(hideLoading());
  }
}

function* tournamentSaga() {
  yield takeEvery(TOURNAMENTS_FETCH_REQUESTED, fetchTournaments);
}

export default tournamentSaga;
