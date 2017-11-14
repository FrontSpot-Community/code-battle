import {call, put, takeEvery} from 'redux-saga/effects';
import Api from '../api/tournaments';

import {fetchSuccess} from '../actions/tournamentActions';
import {TOURNAMENTS_FETCH_REQUESTED} from '../constants';

function* fetchTournaments() {
   try {
      const tournaments = yield call(Api.fetchAll);
      yield put(fetchSuccess(tournaments));
   } catch (e) {
      yield put({type: 'TOURS_FETCH_FAILED', message: e.message}); // toDO
   }
}

function* tourSaga() {
  yield takeEvery(TOURNAMENTS_FETCH_REQUESTED, fetchTournaments);
}

export default tourSaga;
