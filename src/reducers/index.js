import {combineReducers} from 'redux';
import tournamentReducer from './tournamentReducer';

const rootReducer = combineReducers({
    tournaments: tournamentReducer
});

export default rootReducer;
