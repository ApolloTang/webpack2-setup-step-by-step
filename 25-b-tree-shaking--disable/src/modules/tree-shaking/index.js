if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/tree-shaking/index.js'); // eslint-disable-line no-console
}

export {used, notUsed};

function used () { return 'used.'; }
function notUsed () { return 'notUsed.'; }

