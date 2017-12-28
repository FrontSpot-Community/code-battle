import {call, put, takeEvery, all} from 'redux-saga/effects';
import {getTaskById} from '../api/tasks';
import tasksMock from '../api/mocks/tasks.mock';

import {
  tasksFetchSuccess,
  tasksFetchFailed,
  tasksByIdFetchSuccess,
  tasksByIdFetchFailed,
  taskByIdFetchSuccess,
  taskByIdFetchFailed
} from '../actions/action_creators/taskActionCreators';

import {
  TASKS_FETCH,
  TASKS_BY_ID_FETCH,
  TASK_BY_ID_FETCH
} from '../actions/actions';

function* fetchTasks() {
  try {
    const tasks = yield call(tasksMock.fetchAll);
    yield put(tasksFetchSuccess(tasks));
  } catch (e) {
    yield put(tasksFetchFailed(e));
  }
}

function* fetchTaskById({payload}) {
  try {
    const mockTask = yield call(tasksMock.fetchById, 'strings');
    const backendTask = yield call(getTaskById, payload);
    const task = {...mockTask.data, ...backendTask};
    yield put(taskByIdFetchSuccess(task));
  } catch (e) {
    yield put(taskByIdFetchFailed(e));
  }
}

function* fetchTasksById({payload}) {
  try {
    const tasks = yield all(payload.map((id) => call(tasksMock.fetchById, id)));
    const tasksWithoutData = tasks.map((task) => task.data);
    yield put(tasksByIdFetchSuccess(tasksWithoutData));
  } catch (e) {
    yield put(tasksByIdFetchFailed(e));
  }
}

function* taskSaga() {
  yield takeEvery(TASKS_FETCH, fetchTasks);
  yield takeEvery(TASKS_BY_ID_FETCH, fetchTasksById);
  yield takeEvery(TASK_BY_ID_FETCH, fetchTaskById);
}

export default taskSaga;
