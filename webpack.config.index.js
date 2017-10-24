/**
 * Created by vlad on 9/25/2016.
 */
import webpackConfigDev from './webpack.config.dev';
import webpackConfigProd from './webpack.config.prod';

let webpackConfig;

process.env.NODE_ENV === 'development'
    ? webpackConfig = webpackConfigDev
    : webpackConfig = webpackConfigProd;

export default webpackConfig;
