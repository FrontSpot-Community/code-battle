import {Actions} from './actionCreator';
import {
  SOLUTION_FETCH
} from '../actions';

const SolutionActions = new Actions(SOLUTION_FETCH);

export const requestSolution = SolutionActions.request;
export const successSolution = SolutionActions.success;
export const failedSolution = SolutionActions.failed;
