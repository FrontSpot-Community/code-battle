import httpClient from '../services/httpClient/index';
import {TOURAMENT_ENDPOINT} from '../endpoints/index';

export const gettAllTournamnets = (params) => {
  return httpClient.get(TOURAMENT_ENDPOINT, {params});
};

export const getTournamentById = (id, params) => {
  return httpClient.get(`${TOURAMENT_ENDPOINT}/${id}`, {params});
};

export const updateTournamentById = (id, params) => {
  return httpClient.put(`${TOURAMENT_ENDPOINT}/${id}`, params);
};

export const deleteTournamentById = (id) => {
  return httpClient.delete(`${TOURAMENT_ENDPOINT}/${id}`);
};
