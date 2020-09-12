
const APP = document.querySelector('#app');
const APP_CONTAINER = document.createElement('div');
const INPUT = document.createElement('input');
const LIST = document.createElement('ul');
const BUTTON_ADD = document.createElement('button');
const TODO_LIST = [];
// const FRAGMENT = document.createDocumentFragment();

APP_CONTAINER.classList.add('container');
INPUT.setAttribute('type', 'text');
INPUT.setAttribute('placeholder', 'text');
BUTTON_ADD.setAttribute('type', 'button');
BUTTON_ADD.classList.add('btn');
BUTTON_ADD.textContent = 'Add task';

// FRAGMENT.appendChild(APP_CONTAINER);
APP_CONTAINER.appendChild(INPUT);
APP_CONTAINER.appendChild(BUTTON_ADD);
APP_CONTAINER.appendChild(LIST);
APP.appendChild(APP_CONTAINER);

function addTodo(text) {
  const TODO = {
    text,
    checked: false,
    id: Date.now(),
  };

  LIST.insertAdjacentHTML('beforeend', `
    <li data-key="${TODO.id}" id="${TODO.id}">
      <span class="trash" data-key="${TODO.id}">
        <i class="fas fa-trash"></i>
      </span>
      <span class="todo-text">${TODO.text}</span>
    </li>
  `);

  TODO_LIST.push(TODO);
}

INPUT.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    const TEXT = INPUT.value.trim();
    if (TEXT !== '') {
      addTodo(TEXT);
      INPUT.value = '';
      INPUT.focus();
    }
  }
});