if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/twitter/index.js'); // eslint-disable-line no-console
}

const elem_img = document.createElement("img");

import {default as imgUri_twitter} from 'common/images/img_01.png';
console.log('imgUri_twitter: ', imgUri_twitter);
elem_img.src = imgUri_twitter;

export default elem_img;


