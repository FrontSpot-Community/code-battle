import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './containers/App';

export default (
    <div>
        <Redirect from="/" to="/home" />
        <Route path="/" component={App}>
            <IndexRoute component={App} />
        </Route>
    </div>
);
