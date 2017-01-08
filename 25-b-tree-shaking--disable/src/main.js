if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

import {
    doHeavyLifting
} from './util/helper.js';
console.log('doHeavyLifting(): ', doHeavyLifting()); // eslint-disable-line no-console

import thirdPartyCode from './vendor/third-party-code.js';
console.log('thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console


// ================
// 12-css-loader
// ================
import {default as style} from './main.css';


// ===============================
// 21-code-spliting--lazy-loading
// ===============================
const appContainer = document.getElementById("app-container");

const btn = document.createElement("button");
btn.innerHTML = 'click to lazy load';
appContainer.appendChild(btn);

btn.addEventListener('click', () => {
    console.log('Clicked. Now lazy load modules/twitter...');
    System.import('./modules/twitter').then( ({default:elem_twitterImg}) => {
        console.log('Loaded item is: ', elem_twitterImg);
        document.getElementById("app-container").appendChild(elem_twitterImg);
    });
});


// ===============
// 22-babel-loader
// ===============
const n = {o: 'o', p:'p'};
const m = {...n};
const testSpread = () => ({...n});
console.log ('Test ES6,7 testSpread(): ', testSpread());


// ===============
// 25-tree-shaking
// ===============
import {
    used,
    // notUsed //  <----- not import, there for will not export from ./modules/tree-shaking
} from './modules/tree-shaking/';
console.log('used(): ', used()); // eslint-disable-line no-console
