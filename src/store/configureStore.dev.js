import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

let store;

export const configureStore = (initialState) => {
    store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk, reduxImmutableStateInvariant()),
                window.devToolsExtension
                    ? window.devToolsExtension()
                    : (f) => f
            )
    );
    return store;
};

export const getStore = () => {
    return store ? store : null;
};
