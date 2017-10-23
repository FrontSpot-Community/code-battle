/**
 * Created by vlad on 9/25/2016.
 */
import './libs/mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import compression from 'compression';
import webpackMiddleware from './middlewares/webpackMiddleware';
import path from 'path';
import config from './configuration';
import webpackConfig from '../webpack.config.index';
import routers from './routers';
import * as common from './middlewares/common';
import _ from 'lodash';

const app = express();
const compiler = webpack(webpackConfig);

global._root = __dirname;
global._ = _;

process.env.NODE_ENV === 'development'
    ? webpackMiddleware(app, compiler, webpackConfig)
    : app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('*', common.sendIndexHtml);
app.use(express.static(path.join(__dirname, config.get('static'))));
app.use('/api', routers);
app.use(common.errorHandler);
app.listen(config.get('port'), common.listen);
