import httpClient from '../services/httpClient';
import {USER} from '../endpoints';

export const getUser = () => {
  return httpClient.get(USER);
};
