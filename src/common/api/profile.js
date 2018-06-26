import httpClient from '../services/httpClient/index';
import {PROFILE_ENDPOINT} from '../endpoints/index';

export const updateProfile = (data) => {
  return httpClient.post(PROFILE_ENDPOINT, data);
};
