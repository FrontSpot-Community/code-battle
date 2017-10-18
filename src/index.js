import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import {configureStore} from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router routes={routes} />
    </Provider>,
    document.getElementById('app')
);
