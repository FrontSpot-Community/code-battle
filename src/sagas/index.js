import {fork} from 'redux-saga/effects';

import tournamentSaga from './tournamentSaga';
import solutionSaga from './solutionSaga';
import taskSaga from './taskSaga';

export default function* rootSaga() {
  yield [
    fork(tournamentSaga),
    fork(solutionSaga),
    fork(taskSaga)
  ];
}
