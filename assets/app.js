function onPageLoaded() {
  const APP = document.querySelector('#app');
  const APP_CONTAINER = document.createElement('div');
  const INPUT = document.createElement('input');
  const LIST = document.createElement('ul');
  const BUTTON_ADD = document.createElement('button');
  const TODO_LIST = [];

  APP_CONTAINER.classList.add('container');
  INPUT.setAttribute('type', 'text');
  INPUT.setAttribute('placeholder', 'text');
  BUTTON_ADD.setAttribute('type', 'button');
  BUTTON_ADD.classList.add('btn');
  BUTTON_ADD.textContent = 'Add task';
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

    LIST.insertAdjacentHTML(
      'afterbegin',
      `
      <li data-key='${TODO.id}' id='${TODO.id}'>
        <span class='trash' data-key='${TODO.id}'>
          <i class='fas fa-trash'></i>
        </span>
        <span class='todo-text' data-key='${TODO.id}'>${TODO.text}</span>
      </li>
    `
    );

    TODO_LIST.push(TODO);
  }

  function toggleDone(key) {
    const INDEX = TODO_LIST.findIndex(item => item.id === Number(key));
    TODO_LIST[INDEX].checked = !TODO_LIST[INDEX].checked;

    const ITEM = document.querySelectorAll(`[data-key='${key}']`);
    if (TODO_LIST[INDEX].checked) {
      ITEM[2].classList.add('done');
    } else {
      ITEM[2].classList.remove('done');
    }
  }

  INPUT.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      const TEXT = INPUT.value.trim();
      if (TEXT !== '') {
        addTodo(TEXT);
        INPUT.value = '';
        INPUT.focus();
      }
    }
  });

  LIST.addEventListener('click', event => {
    if (event.target.classList.contains('todo-text')) {
      const ITEM_KEY = event.target.parentElement.dataset.key;
      toggleDone(ITEM_KEY);
    }
  });
}

document.addEventListener('DOMContentLoaded', onPageLoaded);