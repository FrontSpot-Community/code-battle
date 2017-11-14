import {call, put, takeEvery} from 'redux-saga/effects';
import Api from '../api/tours';

import {fetchSuccess} from '../actions/tour';
import {TOURS_FETCH_REQUESTED} from '../constants';

function* fetchTours(action) {
   try {
      const tours = yield call(Api.fetchAll);
      yield put(fetchSuccess(tours));
   } catch (e) {
      yield put({type: 'TOURS_FETCH_FAILED', message: e.message}); // toDO
   }
}

function* tourSaga() {
  yield takeEvery(TOURS_FETCH_REQUESTED, fetchTours);
}

export default tourSaga;
