import httpClient from '../services/httpClient';
import {ME, USERS, EPAM_LOGIN} from '../endpoints';

export const getUser = () => {
  return httpClient.get(ME);
};

export const getUsers = () => {
  return httpClient.get(USERS);
};

export const changeUserInfo = (data) => {
  const {id, ...rest} = data;
  return httpClient.put(`user/${id}`, rest);
};

export const epamLogin = (data) => {
  return httpClient.post(EPAM_LOGIN, data);
};
