import {setFormDefault} from './form.js';

const ALERT_SHOW_TIME = 10000;

function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#FF7F50';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeDelay(alertContainer);
}

function setTimeDelay (element) {
  setTimeout(() => {
    element.remove();
  }, ALERT_SHOW_TIME);
}

const success = document.querySelector('#success').content;

function pushSuccessMessage() {
  const messageContainer = document.querySelector('main');
  messageContainer.appendChild(success);
  const message = messageContainer.querySelector('.success');

  message.addEventListener('click', (evt) => {
    hideMessage(messageContainer, message);
    setFormDefault(evt);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      hideMessage(messageContainer, message);
      setFormDefault(evt);
    }
  });
}

function hideMessage (root, element) {
  root.removeChild(element);
}

function pushFailureMessage() {
  const messageContainer = document.querySelector('main');
  const failure = document.querySelector('#error').content;
  messageContainer.appendChild(failure);
  const message = messageContainer.querySelector('.error');
  const buttonError = message.querySelector('.error__button');

  message.addEventListener('click', () => {
    hideMessage(messageContainer, message);
    setFormDefault();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      hideMessage(messageContainer, message);
    }
  });

  buttonError.addEventListener('click', () => {
    message.classList.add('hidden');
  });
}

export {showAlert, pushSuccessMessage, pushFailureMessage};
