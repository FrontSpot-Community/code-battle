import httpClient from '../services/httpClient';
import {SOLUTION_ENDPOINT} from '../endpoints';

export const submitSolution = (data) => {
  return httpClient.post(SOLUTION_ENDPOINT, data);
};

export const getSolutionByTaskId = (taskId) => {
  return httpClient.get(`${SOLUTION_ENDPOINT}/${taskId}`);
};
