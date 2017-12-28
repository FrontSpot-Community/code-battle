import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';
import taskReducer from './taskReducer';
import {loadingBarReducer} from 'react-redux-loading-bar';
import solutionReducer from './solutionReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  tournaments: tournamentReducer,
  solution: solutionReducer,
  loadingBar: loadingBarReducer
});

export default rootReducer;
