const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src');
const commonPath = path.resolve(__dirname, './src/common');
const rootPath = path.resolve(__dirname);
const styleColors = path.resolve(__dirname, './src/common/constants/colors.scss');

module.exports = {
    devtool: 'source-map',
    entry: {
      client: './src/client/index',
      client_admin: './src/client_admin/index'
    },
    output: {
      path: outputPath,
      publicPath: '/',
      filename: '[name]/entry.js'
    },
    resolve: {
      alias: {
        src: srcPath,
        Colors: styleColors,
        common: commonPath,
        root: rootPath
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: srcPath,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=sn-[local]___[hash:base64:5]',
            'sass-loader'
          ],
          include: [
            path.join(__dirname, 'src')
          ],
          exclude: []
        },
        {
          test: /\.(png|gif|jpe?g)$/,
          exclude: /node_modules/,
          use: [
              'preload-image-loader',
              'file-loader?[path][name].[ext]'
          ]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2)$/,
          use:'url-loader?prefix=font/&limit=50000'
        },
        {
          test: /\.(otf)$/,
          use:'url-loader?prefix=font/&limit=50000'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'client', 'index.html'),
        favicon: './assets/images/favicon.ico',
        filename: 'index.html',
        path: outputPath,
        chunks: ['vendor', 'client']
      }),
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'client_admin', 'index_admin.html'),
        favicon: './assets/images/favicon.ico',
        filename: 'index_admin.html',
        path: outputPath,
        chunks: ['vendor', 'client_admin']
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          API_URL: JSON.stringify('https://battle.frontspot.co/api'),
          LOGIN_URL: JSON.stringify('https://battle.frontspot.co/api/auth/github')
        },
      }),
      new ExtractTextPlugin('style.css'),
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) => /node_modules/.test(resource),
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
};
