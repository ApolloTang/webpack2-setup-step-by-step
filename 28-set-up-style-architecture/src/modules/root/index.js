if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/index/index.js'); // eslint-disable-line no-console
}

const root = document.createElement('div');
import style from './style.less';
// import {default as style} from './style.less';

root.className = 'root '+style['module-style'];

const btn = document.createElement("button");
btn.innerHTML = 'click to lazy load';
root.appendChild(btn);

let module_twitter = null;
btn.addEventListener('click', () => {
    if (module_twitter === null) {
        console.log('Lazy load modules/twitter...');
        System.import('modules/twitter').then( ({default:elem_twitterImg}) => {
            console.log('Loaded item is: ', elem_twitterImg);
            module_twitter = elem_twitterImg;
            root.appendChild(module_twitter);
        });
    }
});


export default root;

