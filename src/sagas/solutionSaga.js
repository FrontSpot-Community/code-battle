import {call, put, takeEvery} from 'redux-saga/effects';

import {submitSolution} from '../api/solutions';
import {
  solutionSuccess,
  solutionFailed
} from '../actions/action_creators/solutionActionCreators';

import {SOLUTION_FETCH} from '../actions/actions';

function* sendSolution({payload}) {
  try {
    const {solutionCode, taskId} = payload;
    if (!(solutionCode && taskId)) {
      return put(solutionFailed('Empty solution'));
    }
    const submitResult = yield call(submitSolution, payload);
    yield put(solutionSuccess(submitResult));
  } catch (e) {
    yield put(solutionFailed(e));
  }
}

function* tournamentSaga() {
  yield takeEvery(SOLUTION_FETCH, sendSolution);
}

export default tournamentSaga;
