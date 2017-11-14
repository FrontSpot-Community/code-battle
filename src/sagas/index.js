import {fork} from 'redux-saga/effects';

import tourSaga from './tourSaga';

export default function* rootSaga() {
  yield [
    fork(tourSaga)
  ];
}
