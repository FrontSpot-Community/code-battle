import {fork} from 'redux-saga/effects';

import tournamentSaga from './tournamentSaga';

export default function* rootSaga() {
  yield [
    fork(tournamentSaga)
  ];
}
