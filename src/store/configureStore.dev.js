import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, {END} from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
let store;

export const configureStore = (initialState) => {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        reduxImmutableStateInvariant(),
        sagaMiddleware
      ),
      window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f
    )
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export const getStore = () => {
  return store ? store : null;
};
