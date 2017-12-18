import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from '../reducers';

let store;

export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export const getStore = () => {
  return store ? store : null;
};
