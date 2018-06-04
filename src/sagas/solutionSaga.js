import {call, put, takeEvery} from 'redux-saga/effects';
import {getTournamentById} from '../api/tournaments';
import {postToAmi} from '../api/ami';

import {
  submitSolution,
  getSolutionByTaskId
} from '../api/solutions';
import {
  submitSolutionSuccess,
  submitSolutionFailed,
  solutionByTaskIdSuccess,
  solutionByTaskIdFailed
} from '../actions/action_creators/solutionActionCreators';

import {
  SUBMIT_SOLUTION_FETCH,
  SOLUTION_BY_TASK_ID_FETCH

} from '../actions/actions';

function* sendSolution({payload}) {
  try {
    const {solutionCode, taskId, tournamentId, userInfo} = payload;
    if (!(solutionCode && taskId)) {
      return put(submitSolutionFailed('Empty solution'));
    }
    const submitResult = yield call(submitSolution, payload);
    yield put(submitSolutionSuccess(submitResult));
    const tournament = yield call(getTournamentById, tournamentId);
    if (tournament.solved === tournament.total) {
      const dataToAmi = {
        upsa: userInfo.upsa,
        language: tournament.language,
        tournament: tournament.id
      };
      yield call(postToAmi, dataToAmi);
    }
  } catch (e) {
    yield put(submitSolutionFailed(e));
  }
}

function* getSolution({payload}) {
  try {
    const {taskId} = payload;
    if (!taskId) {
      return put(solutionByTaskIdFailed('Empty solution'));
    }
    const submitResult = yield call(getSolutionByTaskId, taskId);
    yield put(solutionByTaskIdSuccess(submitResult));
  } catch (e) {
    yield put(solutionByTaskIdFailed(e));
  }
}

function* tournamentSaga() {
  yield takeEvery(SUBMIT_SOLUTION_FETCH, sendSolution);
  yield takeEvery(SOLUTION_BY_TASK_ID_FETCH, getSolution);
}

export default tournamentSaga;
