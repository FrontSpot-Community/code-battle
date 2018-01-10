import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {getUser, changeUserInfo} from '../api/user';

import {
  userFetchSuccess,
  userFetchFailed,
  userLoading
} from '../actions/action_creators/userActionCreators';

import {USER_FETCH, USER_PUT} from '../actions/actions';

function* fetchUser() {
  try {
    const user = yield call(getUser);
    yield put(userFetchSuccess(user));
  } catch (error) {
    yield put(userFetchFailed(error.data));
  }
}

function* editUser({payload}) {
  try {
    yield put(showLoading());
    yield put(userLoading());
    const submitResult = yield call(changeUserInfo, payload);
    yield put(userFetchSuccess(submitResult));
  } catch (e) {
    yield put(userFetchFailed(e.data));
  } finally {
    yield put(hideLoading());
  }
}

function* userSaga() {
  yield takeEvery(USER_FETCH, fetchUser);
  yield takeEvery(USER_PUT, editUser);
}

export default userSaga;
