import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import clientRootReducer from 'src/common/reducers';
import clientAdminRootReducer from 'src/client_admin/reducers';

const rootReducer = process.env.ADMIN_PAGE ? clientAdminRootReducer() : clientRootReducer();
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
