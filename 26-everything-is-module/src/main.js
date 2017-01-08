if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

import {
    doHeavyLifting
} from './util/helper.js';
console.log('doHeavyLifting(): ', doHeavyLifting()); // eslint-disable-line no-console

import thirdPartyCode from './vendor/third-party-code.js';
console.log('thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console

const appContainer = document.getElementById("app-container");
import {default as global_style} from './main.css';
appContainer.className = 'appContainer';

import root from './modules/root';
appContainer.appendChild(root);




