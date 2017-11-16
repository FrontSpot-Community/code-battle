import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';
import {loadingBarReducer} from 'react-redux-loading-bar';

const rootReducer = combineReducers({
    tournaments: tournamentReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
