import {Actions} from './actionCreator';
import {
  USER_FETCH
} from '../actions';

const userActions = new Actions(USER_FETCH);

export const userRequest = userActions.request;
export const userFetchSuccess = userActions.success;
export const userFetchFailed = userActions.failed;
