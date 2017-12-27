var AsyncAwaitPlugin = require('webpack-async-await');

const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: 'build/bundle.js',
        library: 'library',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [ "env", "stage-3", "es2017" ],
                    plugins: [ "transform-object-rest-spread", "transform-export-extensions" ]
                }
            },
            
        ]
    },
};