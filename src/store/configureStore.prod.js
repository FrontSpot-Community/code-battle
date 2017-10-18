import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

let store;

export const configureStore = (initialState) => {
    return store = createStore(
        rootReducer,
        initialState,
        applyMiddleware()
    );
};

export const getStore = () => {
    return store ? store : null;
};
