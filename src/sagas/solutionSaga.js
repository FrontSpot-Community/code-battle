import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';

import {submitSolution} from '../api/solutions';
import {
  solutionSuccess,
  solutionFailed,
  solutionLoading
} from '../actions/action_creators/solutionActionCreators';

import {SOLUTION_FETCH} from '../actions/actions';

function* sendSolution({payload}) {
  try {
    yield put(showLoading());
    yield put(solutionLoading());
    const submitResult = yield call(submitSolution, payload);
    yield put(solutionSuccess(submitResult));
  } catch (e) {
    yield put(solutionFailed(e));
  } finally {
    yield put(hideLoading());
  }
}

function* tournamentSaga() {
  yield takeEvery(SOLUTION_FETCH, sendSolution);
}

export default tournamentSaga;
