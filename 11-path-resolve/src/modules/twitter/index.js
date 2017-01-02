if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/twitter/index.js'); // eslint-disable-line no-console
}

var elem_img = document.createElement("img");
elem_img.src = require('common/images/img_01.png');

module.exports = elem_img;


