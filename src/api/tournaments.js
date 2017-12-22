import httpClient from '../services/httpClient';
import {TOURAMENT_ENDPOINT} from '../endpoints';

export const gettAllTournamnets = (data) => {
  return httpClient.get(TOURAMENT_ENDPOINT, {params: data});
};
