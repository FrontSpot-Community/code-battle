import {Actions} from './actionCreator';
import {
  USER_FETCH,
  USER_PUT,
  USER_LOADING,
  USERS_FETCH,
  EPAM_LOGIN
} from '../actions';

const userActions = new Actions(USER_FETCH);
const userActionsEdit = new Actions(USER_PUT);
const allUsersActions = new Actions(USERS_FETCH);

export const userRequest = userActions.request;
export const userFetchSuccess = userActions.success;
export const userFetchFailed = userActions.failed;


export const allUsersRequest = allUsersActions.request;
export const allUsersFetchSuccess = allUsersActions.success;
export const allUsersFetchFailed = allUsersActions.failed;

export const userEdit = userActionsEdit.request;

export const userLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const epamLogin = (data) => {
  return {
    type: EPAM_LOGIN,
    payload: data
  };
};
