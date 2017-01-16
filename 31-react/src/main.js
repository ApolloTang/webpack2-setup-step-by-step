if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

import {
    doHeavyLifting
} from './util/helper.js';
console.log('doHeavyLifting(): ', doHeavyLifting()); // eslint-disable-line no-console

import thirdPartyCode from './vendor/third-party-code.js';
console.log('thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console


import style from 'main.less';

import fonts from 'common/fonts';

const appContainer = document.getElementById("app-container");
import global_style from './main';
appContainer.className = 'appContainer';

// import root from './modules/root';
// appContainer.appendChild(root);


// import React, {Component} from 'react';
// class Root extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//             <div>
//                 <p>This is root</p>
//             </div>
//         )
//     }
// }

import React, {Component} from 'react';
import Root from './modules/root';
console.log('Root: ', Root);
import {render} from 'react-dom';
render( <Root />, appContainer);
