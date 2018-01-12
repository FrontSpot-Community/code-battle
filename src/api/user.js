import httpClient from '../services/httpClient';
import {USER} from '../endpoints';

export const getUser = () => {
  return httpClient.get(USER);
};

export const changeUserInfo = (data) => {
  const {id, ...rest} = data;
  return httpClient.put(`user/${id}`, rest);
};
