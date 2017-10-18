import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let store;

export const configureStore = (initialState) => {
    return store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
};

export const getStore = () => {
    return store ? store : null;
};
