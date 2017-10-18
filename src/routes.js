import React from 'react';
import {BrowserRouter as Route, Redirect} from 'react-router-dom';
import {App} from './containers/App';


export default (
    <div>
        <Redirect from="/" to="/home" />
        <Route path="/home" component={App}>
        </Route>
    </div>
);
