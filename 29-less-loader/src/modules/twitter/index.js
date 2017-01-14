if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/twitter/index.js'); // eslint-disable-line no-console
}

const elem_img = document.createElement("img");

import {default as imgUri_twitter} from './img_01.png';
import {default as style} from './style';

elem_img.src = imgUri_twitter;
elem_img.className = 'twitter ' + style['module-style'];


export default elem_img;


