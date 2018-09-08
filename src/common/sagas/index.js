import {fork} from 'redux-saga/effects';

import tournamentSaga from './tournamentSaga';
import solutionSaga from './solutionSaga';
import taskSaga from './taskSaga';
import userSaga from './userSaga';

const commonSagas = [
  tournamentSaga,
  solutionSaga,
  taskSaga,
  userSaga
];

const extendRootSaga = (sagas) => {
  return function* rootSaga() {
    yield commonSagas
      .concat(sagas)
      .map((saga) => (fork(saga)));
  };
};


export default extendRootSaga;
