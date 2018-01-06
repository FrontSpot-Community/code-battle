import httpClient from '../services/httpClient';
import {PROFILE_ENDPOINT} from '../endpoints';

export const updateProfile = (data) => {
  return httpClient.post(PROFILE_ENDPOINT, data);
};
