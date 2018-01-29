import httpClient from '../services/httpClient';
import {TASK_ENDPOINT} from '../endpoints';

export const getTaskById = (id, params) => {
  return httpClient.get(`${TASK_ENDPOINT}/${id}`, {params});
};

export const getAllTasks = (params) => {
  return httpClient.get(`${TASK_ENDPOINT}`, {params});
};
