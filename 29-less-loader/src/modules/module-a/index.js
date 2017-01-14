if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/module-a/index.js'); // eslint-disable-line no-console
}

const elem_p = document.createElement('p');

import style from './style';

elem_p.innerHTML = 'module-a';
elem_p.className = 'module-a ' + style['module-style'];


export default elem_p;


