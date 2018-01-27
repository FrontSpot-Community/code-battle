import httpClient from '../services/httpClient';
import {SOLUTION_ENDPOINT} from '../endpoints';

export const submitSolution = (data) => {
  return httpClient.post(SOLUTION_ENDPOINT, data);
};

export const getSolutionById = (solutionId) => {
  return httpClient.get(`${SOLUTION_ENDPOINT}/${solutionId}`);
};

export const getSolutionByTaskId = (taskName) => {
  if (!taskName) throw Error('No task id is specified');

  return httpClient.get(`${SOLUTION_ENDPOINT}`, {taskIds: taskName});
};

export const getSolutionsByTaskIds = (tasksNames) => {
  if (!Array.isArray(tasksNames)) throw Error('No tasks ids are specified');

  return httpClient.get(`${SOLUTION_ENDPOINT}`, {taskIds: tasksNames.join(',')});
};
