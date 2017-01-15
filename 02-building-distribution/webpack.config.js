const pathResolve = require('path').resolve;

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('server/dist');
const absolutePath_serverFolder = pathResolve('server');

console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
console.log('absolutePath_serverFolder: ', absolutePath_serverFolder);
console.log('absolutePath_buildFolder: ', absolutePath_buildFolder);

const config = {
    devServer: {
        contentBase: absolutePath_serverFolder  // [1]
    },
    context: absolutePath_sourceFolder,         // [2]
    entry: './main.js',
    output: {
        publicPath: 'dist/',                 // [3]
        path: absolutePath_buildFolder,      // [4]
        filename: 'bundle.js',
    },
};

module.exports = config;


// [1] • Root of the webpack's http dev-server, index.html file server from here.
//     • [!] must be absolute path.
//     • config.devServer is ignored when not running webpack-dev-server.
//
// [2] • Context of entry point;
//     • [!] must be absolute path
//
// [3] • Webpack bundle is servered from localhost://8080/server/dist/bundle.js,
//     • Origin is memory not server file.
//     • [!] Not absolute path.
//     • config.output.publicPath is ignored when not running webpack-dev-server.
//
// [4] • Webpack bundle is saved to /path/to/project/server/dist/bundle.js

