import {fork} from 'redux-saga/effects';

import tournamentSaga from './tournamentSaga';
import solutionSaga from './solutionSaga';
import taskSaga from './taskSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield [
    fork(tournamentSaga),
    fork(solutionSaga),
    fork(taskSaga),
    fork(userSaga)
  ];
}
