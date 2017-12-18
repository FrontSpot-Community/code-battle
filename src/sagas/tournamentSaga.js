import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';

import Api from '../api/tournaments';
import {fetchSuccess, fetchFailed} from '../actions/tournamentActions';
import {TOURNAMENTS_FETCH_REQUESTED} from '../constants';

function* fetchTournaments() {
  try {
    yield put(showLoading());
    const tournaments = yield call(Api.fetchAll);
    yield put(fetchSuccess(tournaments));
  } catch (e) {
    yield put(fetchFailed(e));
  } finally {
    yield put(hideLoading());
  }
}

function* tourSaga() {
  yield takeEvery(TOURNAMENTS_FETCH_REQUESTED, fetchTournaments);
}

export default tourSaga;
