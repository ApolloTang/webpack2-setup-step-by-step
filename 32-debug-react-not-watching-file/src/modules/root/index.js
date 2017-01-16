if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

import Twitter from 'modules/Twitter';
class Root extends Component {
    constructor(props) {
        super(props);
        this.state={
            module_twitter:null
        }
    }
    handleClick_lazyLoad() {
        this.setState({module_twitter:(<Twitter />)});
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>Root Component</p>
                <button onClick={this.handleClick_lazyLoad.bind(this)}>click to lazy load</button>
                <div className="lazy-load-container">
                    { this.state.module_twitter ? this.state.module_twitter : null }
                </div>
            </div>
        )
    }
}

export default Root;



