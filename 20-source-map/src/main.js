if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

var helper = require('./util/helper.js');
var thirdPartyCode = require('./vendor/third-party-code.js');

if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('main.js: thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console
    console.info('main.js: helper.doHeavyLifting(): ', helper.doHeavyLifting()); // eslint-disable-line no-console
}


// ================
// 11-path-resolve
// ================
var elem_twitterImg = require('./modules/twitter');
document.getElementById("app-container").appendChild(elem_twitterImg);


// ================
// 12-css-loader
// ================
require('./main.css');


// ================
// 15-build-hash
// 16-chunkhash
// 17-long-term-cached
// ================
var change = 'change 3x';
