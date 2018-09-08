import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';
import taskReducer from './taskReducer';
import solutionReducer from './solutionReducer';
import userReducer from './userReducer';

const commonReducerMap = {
  tasks: taskReducer,
  tournaments: tournamentReducer,
  solution: solutionReducer,
  user: userReducer
};

const combineRootReducer = (reducerMap) => (
  combineReducers({
    ...commonReducerMap,
    ...reducerMap
  })
);

export default combineRootReducer;
