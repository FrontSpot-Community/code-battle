import httpClient from '../services/httpClient';
import {ME, USERS} from '../endpoints';

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
