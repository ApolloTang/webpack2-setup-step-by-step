if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/index/index.js'); // eslint-disable-line no-console
}


import style from './style.css';


const root = document.createElement('div');
root.className = 'root '+style['module-style'];


const btn = document.createElement("button");
btn.innerHTML = 'click to lazy load';
root.appendChild(btn);


const lazyLoadContainer = document.createElement('div');
lazyLoadContainer.className = style['lazy-load-container'];
root.appendChild(lazyLoadContainer);


let module_twitter = null;
btn.addEventListener('click', () => {
    if (module_twitter === null) {
        console.log('Lazy load modules/twitter...');
        System.import('modules/twitter').then( ({default:elem_twitterImg}) => {
            console.log('Loaded item is: ', elem_twitterImg);
            module_twitter = elem_twitterImg;
            lazyLoadContainer.appendChild(module_twitter);
        });
    }
});


import moduleA from 'modules/module-a';
root.appendChild(moduleA);


export default root;

