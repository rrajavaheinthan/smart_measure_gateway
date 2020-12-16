const path = require("path");
const plugins = require('./webpack-utils/plugins');
const loaders = require('./webpack-utils/loaders');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');


const webpackOption = {
    mode: 'production',
    entry: {
        "index": "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            loaders.typescript,
            loaders.css,
            loaders.scss,
            loaders.file
        ],
    },
    plugins: [
        plugins.cleanWebpackPlugin,
        plugins.htmlWebpackPlugin,
        new BaseHrefWebpackPlugin({ baseHref: '/' })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],
        mainFields: ["browser", "main", "module"]
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
    },
};

module.exports = webpackOption;


