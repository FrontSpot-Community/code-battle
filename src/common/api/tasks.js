import httpClient from '../services/httpClient/index';
import {TASK_ENDPOINT} from '../endpoints/index';

export const getTaskById = (id, params) => {
  return httpClient.get(`${TASK_ENDPOINT}/${id}`, {params});
};

export const getAllTasks = (params) => {
  return httpClient.get(`${TASK_ENDPOINT}`, {params});
};

export const updateTaskById = (id, params) => {
  return httpClient.put(`${TASK_ENDPOINT}/${id}`, params);
};

export const removeTaskById = (id) => {
  return httpClient.delete(`${TASK_ENDPOINT}/${id}`);
};

export const addTask = (params) => {
  return httpClient.post(`${TASK_ENDPOINT}`, params);
};
