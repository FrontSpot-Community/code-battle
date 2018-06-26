import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';
import taskReducer from './taskReducer';
import solutionReducer from './solutionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  tournaments: tournamentReducer,
  solution: solutionReducer,
  user: userReducer
});

export default rootReducer;
