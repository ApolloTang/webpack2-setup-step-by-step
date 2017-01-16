if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>This is root</p>
            </div>
        )
    }
}

export default Root;



