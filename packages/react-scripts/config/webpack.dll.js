const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isDev = process.env.NODE_ENV !== 'production';
const outputPath = path.join(paths.dllConfig, isDev ? 'dev' : 'prod');
let fileName = '[name].[hash].js';
const dllDev = require(`${paths.dllConfig}/dll.dev`);
const dllProd = require(`${paths.dllConfig}/dll.prod`);
const lib = isDev ? dllDev : dllProd;
const plugin = [
    new webpack.DllPlugin({
        path: path.join(outputPath, 'manifest.json'),
        name: '[name]_[hash]',
        context: __dirname
    })
];
const dllConfig = {
    mode: isDev ? 'development' : 'production',
    entry: {
        lib: lib
    },
    output: {
        path: outputPath,
        filename: fileName,
        library: '[name]_[hash]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: plugin
};
module.exports = () => dllConfig;
