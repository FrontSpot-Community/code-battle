import {call, put, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {getUser, changeUserInfo, getUsers, epamLogin} from '../api/user';

import {
  userFetchSuccess,
  userFetchFailed,
  userLoading,
  allUsersFetchSuccess,
  allUsersFetchFailed
} from '../actions/action_creators/userActionCreators';

import {USER_FETCH, USER_PUT, USERS_FETCH, EPAM_LOGIN} from '../actions/actions';

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

function* fetchAllUsers() {
  try {
    const users = yield call(getUsers);
    yield put(allUsersFetchSuccess(users));
  } catch (error) {
    yield put(allUsersFetchFailed(error.data));
  }
}

function* postEpamLogin({payload}) {
  try {
    const user = yield call(epamLogin, payload);
    yield put(userFetchSuccess(user));
  } catch (error) {
    yield put(userFetchFailed(error.data));
  }
}

function* userSaga() {
  yield takeEvery(USER_FETCH, fetchUser);
  yield takeEvery(USER_PUT, editUser);
  yield takeEvery(USERS_FETCH, fetchAllUsers);
  yield takeEvery(EPAM_LOGIN, postEpamLogin);
}

export default userSaga;
