import {call, put, takeEvery} from 'redux-saga/effects';
import {getUser} from '../api/user';

import {
  userFetchSuccess,
  userFetchFailed
} from '../actions/action_creators/userActionCreators';

import {USER_FETCH} from '../actions/actions';

function* fetchUser() {
  try {
    const user = yield call(getUser);
    yield put(userFetchSuccess(user));
  } catch (error) {
    yield put(userFetchFailed(error.data));
  }
}

function* userSaga() {
  yield takeEvery(USER_FETCH, fetchUser);
}

export default userSaga;
