import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {configureStore} from 'src/common/store/configureStore';
import App from 'common/containers/AppContainer';
import LoginContainer from 'src/common/containers/LoginContainer';
import HomeContainer from 'src/client/containers/HomeContainer';
import TournamentContainer from 'src/client/containers/TournamentContainer';
import TaskEditContainer from 'src/client_admin/containers/TaskEditContainer';
import cookieService from 'src/common/services/cookie/index';

import rootSaga from 'src/client_admin/sagas';
import {userRequest} from 'src/client/actions/action_creators/userActionCreators';
import TournamentContainer from 'src/common/containers/TournamentContainer';
import withActivePageDispatch from 'common/components/Hocs/withActivePageDispatch';
import withPageName from 'common/components/Hocs/withPageName';
import {HOME_PAGE, TOURNAMENT_PAGE, TASK_TRAIN_PAGE} from 'common/constants/activePageNames';
import TaskContainer from 'src/client/containers/TaskContainer';
import TaskTrainContainer from 'src/client/containers/TaskTrainContainer';

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(userRequest());

const renderComponent = (Component) => {
  return () => {
    const token = cookieService.getCookie('token');

    return token ? <Component /> : <Redirect to='login' />;
  };
};

const wrapComponentWithHoc = (component, pageName) =>(
  withActivePageDispatch(
    withPageName(component, pageName)
  )
);

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact
            path="/"
            render={renderComponent(wrapComponentWithHoc(HomeContainer, HOME_PAGE))}/>

          <Route exact
            path="/:id"
            component={wrapComponentWithHoc(TournamentContainer, TOURNAMENT_PAGE)}/>

          <Route exact
            path="/:id/:taskId/train"
            component={wrapComponentWithHoc(TaskTrainContainer, TASK_TRAIN_PAGE)} />

          <Route exact path="/:id/:taskId" component={TaskContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/:id" component={TournamentContainer} />
          <Route exact path="/:id/:taskId" component={TaskEditContainer} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
