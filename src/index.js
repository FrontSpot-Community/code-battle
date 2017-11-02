import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {configureStore} from './store/configureStore';
import {App} from './containers/App';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import BattleContainer from './containers/BattleContainer';
import TaskContainer from './containers/TaskContainer';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/about" component={AboutContainer} />
                  <Route exact path="/battle/:id" component={BattleContainer} />
                  <Route exact path="/battle/:id/:taskId"
                     component={TaskContainer} />
                  <Route path="*" component={AboutContainer} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);
