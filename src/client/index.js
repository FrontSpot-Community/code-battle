import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {configureStore} from 'src/common/store/configureStore';
import App from 'src/client/containers/AppContainer';
import HomeContainer from 'src/client/containers/HomeContainer/index';
import TournamentContainer from 'src/common/containers/TournamentContainer';
import TaskContainer from 'src/client/containers/TaskContainer/index';
import TaskTrainContainer from 'src/client/containers/TaskTrainContainer/index';
import ProfileContainer from 'src/client/containers/ProfileContainer/index';
import SecContainer from 'src/client/containers/SecContainer/index';
import LoginContainer from 'src/common/containers/LoginContainer/index';
import cookieService from 'src/common/services/cookie/index';

import rootSaga from 'src/client/sagas';
import {userRequest} from './actions/action_creators/userActionCreators';

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

          <Route exact path="/:id" component={TournamentContainer} />
          <Route exact path="/:id/:taskId" component={TaskContainer} />
          <Route exact path="/:id/:taskId/train" component={TaskTrainContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/sec" component={SecContainer} />
          <Route path="*" component={HomeContainer} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
