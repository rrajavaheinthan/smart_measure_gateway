var path = require('path');
const plugins = require('./webpack-utils/plugins');
const loaders = require('./webpack-utils/loaders');


module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            loaders.typescript,
            loaders.css,
            loaders.scss,
            loaders.file
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],
        mainFields: ["browser", "main", "module"]
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: {
            "/clause-library-api": {
                "changeOrigin": true,
                "cookieDomainRewrite": "localhost",
                "target": 'http://localhost:9876',
            }
        }
    },
    plugins: [
        plugins.htmlWebpackPlugin
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

};