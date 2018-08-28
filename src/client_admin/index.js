import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {configureStore} from 'src/common/store/configureStore';
import App from 'src/client/containers/App';
import LoginContainer from 'src/common/containers/LoginContainer';
import HomeContainer from 'src/client/containers/HomeContainer';
import TournamentContainer from 'src/client/containers/TournamentContainer';
import TaskEditContainer from 'src/client_admin/containers/TaskEditContainer';
import cookieService from 'src/common/services/cookie/index';

import rootSaga from 'src/client_admin/sagas';
import {userRequest} from 'src/client/actions/action_creators/userActionCreators';

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(userRequest());

const renderComponent = (component) => {
  return () => {
    const token = cookieService.getCookie('token');

    return token ? component : <Redirect to='login' />;
  };
};

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" render={renderComponent(<HomeContainer/>)}/>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/:id" component={TournamentContainer} />
          <Route exact path="/:id/:taskId" component={TaskEditContainer} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
