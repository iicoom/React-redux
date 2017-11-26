var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/cliet',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'buddle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loders: [
            {
                test: /\.js$/,
                loaders: [ 'bable' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}