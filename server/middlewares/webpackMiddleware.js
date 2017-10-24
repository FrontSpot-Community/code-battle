/**
 * Created by vlad on 9/25/2016.
 */

export default (app, compiler, webpackConfig) => {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
};
