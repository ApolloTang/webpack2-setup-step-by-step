const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 8080;

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('dist');
const absolutePath_nodeModules = pathResolve('node_modules');

const info = process.env.CONSOLE_LOG;

const config_fn = env => {                        // [6]
    if ( info === 'true' || env && env.debug ) {
        console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
        console.log('absolutePath_buildFolder: ', absolutePath_buildFolder);
    }

    const config = {
        devServer: {
            host: webpackDevServer_host,
            port: webpackDevServer_port
        },
        performance: {
            hints: (info === 'true')             // [11]
        },
        context: absolutePath_sourceFolder,      // [2]
        entry: {                                 // [9]
            vendor: [
                './vendor/third-party-code.js'
            ],
            common: [
                './util/helper.js'
            ],
            main: './main.js'
        },
        output: {
            path: absolutePath_buildFolder,      // [4]
            filename: 'bundle.[name].[hash].js',        // [9]
        },
        resolve: {
            modules: [                           // [16]
                absolutePath_sourceFolder,
                absolutePath_nodeModules,
            ],
            extensions: ['.js']                  // [17]
        },
        module: {
            loaders: [
                {
                    test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,    // [12]
                    loader: 'file-loader?name=./imgs/[name].[hash].[ext]',  // [13]
                },
                {
                    test: /\.css$/,                                  // [18]
                    loader: ExtractTextPlugin.extract({              // [19]
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader'
                    }),
                    include: absolutePath_sourceFolder
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.template.html',
                favicon: './common/images/favicon.ico'  // [15]
            }),
            new ProgressBarPlugin(),             // [7]
            new webpack.optimize.CommonsChunkPlugin({
                name: [ 'vendor', 'common' ]     //[10]
            }),
            new ExtractTextPlugin('styles.[name].[hash].css') // [19]
        ]
    };

    if ( info === 'true' || env && env.debug ) {
        console.log('webpack.config: ', config)  // [8]
    }
    return config;
};

module.exports = config_fn;

// [20] • Instantiate ExtractTextPlugin with output name.
//
// [19] • Pass loader configuration through ExtractTextPlugin
//
// [18] • Match css file for css loader.
//
// [17] • Can leave off the extension when requiring a file.
//
// [16] • Context of search path when requiring a module.
//
// [15] • Read favicon.ico from common/images/ folder.
//      • favicon.ica is handled by HtmlWebpackPlugin, thus will not place in
//        /dist/imgs.
//
// [13] • Retain original file name and place image assets in /dist/imgs/ folder.
//
// [12] • regex to match media file of images type.
//
// [11] • Turn off hint to reduce cluttter.
//
// [10] • Specify the bundles vendor and common as common bundles
//        thus, module in these bundles will only load once.
//
// [2] • Context of entry point;
//     • [!] must be absolute path
//
// [4] • Webpack bundle is saved to /path/to/project/server/dist/bundle.js
//     • [!] must be absolute path
//
// [5] • To avoid flash of unstyle page, never inject into head.
//
// [6] • npm script with --env.debug will result in env.debug=true.
//
// [7] • show progress bar in terminal
//
// [8] • all default value of webpack configruation is logged.
//
// [9] • Each key in entry will map to the [name] placeholder in the value of output.filename
//
