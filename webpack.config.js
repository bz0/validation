var path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './htdocs/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};