if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

var helper = require('./util/helper.js');
var thirdPartyCode = require('./vendor/third-party-code.js');

if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('main.js: thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console
    console.info('main.js: helper.doHeavyLifting(): ', helper.doHeavyLifting()); // eslint-disable-line no-console
}


// // ================
// // 11-path-resolve
// // ================
// var elem_twitterImg = require('./modules/twitter');
// document.getElementById("app-container").appendChild(elem_twitterImg);


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


// ===============================
// 21-code-spliting--lazy-loading
// ===============================
var appContainer = document.getElementById("app-container");

var btn = document.createElement("button");
btn.innerHTML = 'click to lazy load';
appContainer.appendChild(btn);

btn.addEventListener('click', function(){
    console.log('Clicked. Now lazy load modules/twitter...');
    System.import('./modules/twitter').then( (elem_twitterImg) => {
        console.log('Loaded item is: ', elem_twitterImg);
        document.getElementById("app-container").appendChild(elem_twitterImg);
    });
});

