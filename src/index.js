import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {configureStore} from './store/configureStore';
import {App} from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import TaskPage from './containers/TaskPage';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/task-page" component={TaskPage} />
                    <Route path="*" component={About} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);
