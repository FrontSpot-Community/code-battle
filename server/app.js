/**
 * Created by vlad on 9/25/2016.
 */
import './libs/mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import webpack from 'webpack';
import compression from 'compression';
import _ from 'lodash';
import path from 'path';

import webpackMiddleware from './middlewares/webpackMiddleware';

import config from './configuration';
import webpackConfig from '../webpack.config.index';
import routers from './routers';
import * as common from './middlewares/common';
import passportInitializer from './libs/passaportInitializer';
import gitHubStrategyFactory from './libs/githubStrategyFactory';
import authRouter from './routers/auth.router';

const app = express();
const compiler = webpack(webpackConfig);

global._root = __dirname;
global._ = _;

process.env.NODE_ENV === 'development'
    ? webpackMiddleware(app, compiler, webpackConfig)
    : app.use(compression());
app.use(cookieParser());
app.use(session({
    secret: 'rs_-_pada(wans',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, config.get('static'))));
app.use(passport.initialize());
app.use(passport.session());
passportInitializer(passport, gitHubStrategyFactory());
app.use(authRouter);
app.use(routers);
app.get('*', common.sendIndexHtml);
app.use(common.errorHandler);
app.listen(config.get('port'), common.listen);
