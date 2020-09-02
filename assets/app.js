
const APP = document.querySelector('#app');
const APP_CONTAINER = document.createElement('div');
const INPUT = document.createElement('input');
const LIST = document.createElement('ul');
// const FRAGMENT = document.createDocumentFragment();

APP_CONTAINER.classList.add('container');
INPUT.setAttribute('type', 'text');
INPUT.setAttribute('placeholder', 'text');

// FRAGMENT.appendChild(APP_CONTAINER);
APP_CONTAINER.appendChild(INPUT);
APP_CONTAINER.appendChild(LIST);
APP.appendChild(APP_CONTAINER);