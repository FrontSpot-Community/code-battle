import {call, put, takeEvery} from 'redux-saga/effects';

import {submitSolution} from '../api/solutions';
import {
  submitSolutionSuccess,
  submitSolutionFailed,
  solutionByTaskIdSuccess,
  solutionByTaskIdFailed
} from '../actions/action_creators/solutionActionCreators';

import {
  SUBMIT_SOLUTION_FETCH, SOLUTION_BY_TASK_ID_FETCH
} from '../actions/actions';

function* sendSolution({payload}) {
  try {
    const {solutionCode, taskId} = payload;
    if (!(solutionCode && taskId)) {
      return put(submitSolutionFailed('Empty solution'));
    }
    const submitResult = yield call(submitSolution, payload);
    yield put(submitSolutionSuccess(submitResult));
  } catch (e) {
    yield put(submitSolutionFailed(e));
  }
}

function* getSolutionByTaskId({payload}) {
  try {
    const {taskId} = payload;
    if (!taskId) {
      return put(solutionByTaskIdFailed('Empty solution'));
    }
    const submitResult = yield call(submitSolution, taskId);
    yield put(solutionByTaskIdSuccess(submitResult));
  } catch (e) {
    yield put(solutionByTaskIdFailed(e));
  }
}

function* tournamentSaga() {
  yield takeEvery(SUBMIT_SOLUTION_FETCH, sendSolution);
  yield takeEvery(SOLUTION_BY_TASK_ID_FETCH, getSolutionByTaskId);
}

export default tournamentSaga;
