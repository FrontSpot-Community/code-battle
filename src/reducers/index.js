import {combineReducers} from 'redux';
import tourReducer from './tourReducer';

const rootReducer = combineReducers({
    tours: tourReducer
});

export default rootReducer;
