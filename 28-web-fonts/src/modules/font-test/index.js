if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

const elem_moduleRoot = document.createElement('div');
import style from './style.css';
elem_moduleRoot.className = 'font-test ' + style['module-style'];

const elem_RobotoThin = document.createElement('p');
elem_RobotoThin.className = 'thin';
elem_RobotoThin.innerHTML = 'RobotoThin';
elem_moduleRoot.appendChild(elem_RobotoThin);

const elem_RobotoLight = document.createElement('p');
elem_RobotoLight.className = 'light';
elem_RobotoLight.innerHTML = 'RobotoLight';
elem_moduleRoot.appendChild(elem_RobotoLight);

export default elem_moduleRoot;



