import {Actions} from './actionCreator';
import {
  SUBMIT_SOLUTION_FETCH,
  SOLUTION_BY_TASK_ID_FETCH
} from '../actions';

const SubmitSolutionActions = new Actions(SUBMIT_SOLUTION_FETCH);
const SolutionByTaskIdActions = new Actions(SOLUTION_BY_TASK_ID_FETCH);

export const submitSolutionRequest = SubmitSolutionActions.request;
export const submitSolutionSuccess = SubmitSolutionActions.success;
export const submitSolutionFailed = SubmitSolutionActions.failed;

export const solutionByTaskIdRequest = SolutionByTaskIdActions.request;
export const solutionByTaskIdSuccess = SolutionByTaskIdActions.success;
export const solutionByTaskIdFailed = SolutionByTaskIdActions.failed;
