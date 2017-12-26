import httpClient from '../services/httpClient';
import {TOURAMENT_ENDPOINT} from '../endpoints';

export const gettAllTournamnets = (params) => {
  return httpClient.get(TOURAMENT_ENDPOINT, {params});
};

export const getTournamentById = (id, params) => {
  return httpClient.get(`${TOURAMENT_ENDPOINT}/${id}`, {params});
};
