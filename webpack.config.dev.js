const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src');
const commonPath = path.resolve(__dirname, './src/common');
const rootPath = path.resolve(__dirname);
const styleColors = path.resolve(__dirname, './src/common/constants/colors.scss');
const devServerCommon = {
  stats: 'errors-only',
  contentBase: outputPath,
  host: '0.0.0.0',
  port: 3000,
  inline: true,
  hot: true
}

module.exports = {
  entry: {
    client: './src/client/index',
    client_admin: './src/client_admin/index'
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].entry.js'
  },
  devtool: 'inline-source-map',
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
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   include: srcPath,
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: true
      //   }
      // },
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
        test: /\.(png|jpe?g)$/,
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
        use: 'url-loader?prefix=font/&limit=50000'
      },
      {
        test: /\.(otf)$/,
        use: 'url-loader?prefix=font/&limit=50000'
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
    process.env.ADMIN_PAGE ?
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'client_admin', 'index.html'),
      favicon: './assets/images/favicon.ico',
      filename: 'index.html',
      path: outputPath,
      chunks: ['vendor', 'client_admin']
    }) :
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'client', 'index.html'),
      favicon: './assets/images/favicon.ico',
      filename: 'index.html',
      path: outputPath,
      chunks: ['vendor', 'client']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify('http://localhost:3002'),
        LOGIN_URL: JSON.stringify('http://localhost:3002/auth/github')
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    })
  ],
  devServer: process.env.ADMIN_PAGE ? {
    ...devServerCommon,
    historyApiFallback: true,
    index: 'index_admin.html'
  } : {
    ...devServerCommon,
    historyApiFallback: true,
    index: 'index.html'
  }
};
