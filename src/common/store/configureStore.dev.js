import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, {END} from 'redux-saga';
import clientRootReducer from 'src/common/reducers';
import clientAdminRootReducer from 'src/client_admin/reducers';

const rootReducer = process.env.ADMIN_PAGE ? clientAdminRootReducer() : clientRootReducer();
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
