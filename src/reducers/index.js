import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';
import {loadingBarReducer} from 'react-redux-loading-bar';
import solutionReducer from './solutionReducer';

const rootReducer = combineReducers({
  tournaments: tournamentReducer,
  solution: solutionReducer,
  loadingBar: loadingBarReducer
});

export default rootReducer;
