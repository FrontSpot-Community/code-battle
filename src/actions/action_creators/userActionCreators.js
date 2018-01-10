import {Actions} from './actionCreator';
import {
  USER_FETCH,
  USER_PUT,
  USER_LOADING
} from '../actions';

const userActions = new Actions(USER_FETCH);
const userActionsEdit = new Actions(USER_PUT);

export const userRequest = userActions.request;
export const userFetchSuccess = userActions.success;
export const userFetchFailed = userActions.failed;

export const userEdit = userActionsEdit.request;

export const userLoading = () => {
  return {
    type: USER_LOADING
  };
};
