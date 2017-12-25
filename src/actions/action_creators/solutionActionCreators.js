import {Actions} from './actionCreator';
import {
  SOLUTION_FETCH,
  SOLUTION_LOADING
} from '../actions';

const SolutionActions = new Actions(SOLUTION_FETCH);

export const solutionRequest = SolutionActions.request;
export const solutionSuccess = SolutionActions.success;
export const solutionFailed = SolutionActions.failed;

export const solutionLoading = () => {
  return {
    type: SOLUTION_LOADING
  };
};
