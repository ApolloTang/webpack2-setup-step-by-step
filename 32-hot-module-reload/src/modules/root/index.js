if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import { AppContainer as Hot } from 'react-hot-loader'

import ModuleA from 'modules/module-a';
import FontTest from 'modules/font-test';

import style from './style';
class Root extends Component {
    constructor(props) {
        super(props);
        this.state={
            module_twitter:null,
            ModuleA: null,

        }
    }

    componentDidMount() {
        if (module.hot) {
            // ModuleA
            console.info('✅  HMR Enabled for <ModuleA />.'); // eslint-disable-line no-console

            this.setState( {ModuleA:(<Hot><ModuleA /></Hot>)});

            module.hot.accept('modules/module-a', (opts) => {
                console.log('🔁 reloading Module A...', opts); // eslint-disable-line no-console

                System.import('modules/module-a').then(
                    ({ default: ModuleA_new }) => {
                        this.setState( {ModuleA: ( <Hot><ModuleA_new /></Hot>)})
                    },
                    err => {
                        console.info('❌  HMR error (<ModuleA />): ', err); // eslint-disable-line no-console
                    }
                );
            });

        } else {
            this.setState( {ModuleA:(<ModuleA />)});
        }
    }

    handleClick_lazyLoad() {
        if (this.state.module_twitter === null) {
            console.log('Lazy load modules/twitter...'); // eslint-disable-line no-console
            System.import('modules/twitter').then(
                ({default: Twitter}) => {
                    console.log('Loaded modules is: ', Twitter); // eslint-disable-line no-console
                    this.setState({module_twitter:(<Twitter />)});
                },
                err => {
                    console.log('Loading module <Twitter/> fail') // eslint-disable-line no-console
                }
            );
        }
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>Root Component</p>
                <button onClick={this.handleClick_lazyLoad.bind(this)}>click to lazy load</button>
                <div className="lazy-load-container">
                    { this.state.module_twitter ? this.state.module_twitter : null }
                </div>
                { this.state.ModuleA ? this.state.ModuleA : null }
                <FontTest />
            </div>
        )
    }
}

export default Root;



