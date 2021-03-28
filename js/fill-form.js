import {isEscEvent, isClickEvent} from './util.js';
import {sendData} from './api.js';
import {mainMarker,TOKIO_CENTER_LAT, TOKIO_CENTER_LNG} from './map.js';

const typeEstateElement = document.querySelector('#type');
const pricePerNightElement = document.querySelector('#price');
const timeInSelectElement = document.querySelector('#timein');
const timeOutSelectElement = document.querySelector('#timeout');
const titleInputElement = document.querySelector('#title');
const roomNumberInputElement = document.querySelector('#room_number');
const guestsInputElement = document.querySelector('#capacity');

const resetButton = document.querySelector('.ad-form__reset');
const addressForm = document.querySelector('#address');
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const mapFilters = document.querySelector('.map__filters');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOM = 100;
const NOT_FOR_GUESTS = 0;

const BUNGALOW_MIN_PRICE = 0;
const FLAT_MIN_PRICE = 1000;
const HOUSE_MIN_PRICE = 5000;
const PALACE_MIN_PRICE = 10000;


typeEstateElement.addEventListener('click', function(e) {
  e.preventDefault();
  if (typeEstateElement.value === 'bungalow') {
    pricePerNightElement.placeholder = BUNGALOW_MIN_PRICE;
    pricePerNightElement.min = BUNGALOW_MIN_PRICE;
  } else if (typeEstateElement.value === 'flat') {
    pricePerNightElement.placeholder = FLAT_MIN_PRICE;
    pricePerNightElement.min = FLAT_MIN_PRICE;
  } else if (typeEstateElement.value === 'house') {
    pricePerNightElement.placeholder = HOUSE_MIN_PRICE;
    pricePerNightElement.min = HOUSE_MIN_PRICE;
  } else if (typeEstateElement.value === 'palace') {
    pricePerNightElement.placeholder = PALACE_MIN_PRICE;
    pricePerNightElement.min = PALACE_MIN_PRICE;
  }
});

timeInSelectElement.addEventListener('change', (evt) => {
  const time = evt.target.value;
  timeOutSelectElement.value = time;
});

const validationRoomsAndGuests = function () { // Валидация количества комнат и гостей
  const roomValue = Number(roomNumberInputElement.value);
  const guestsValue = Number(guestsInputElement.value);

  if (roomValue < guestsValue && guestsValue !== NOT_FOR_GUESTS) {
    roomNumberInputElement.setCustomValidity('Слишком мало комнат');
  } else if (roomValue === MAX_ROOM & guestsValue !== NOT_FOR_GUESTS) {
    roomNumberInputElement.setCustomValidity('Такое количество комнат не для гостей');
  } else if (roomValue !== MAX_ROOM && guestsValue === NOT_FOR_GUESTS) {
    roomNumberInputElement.setCustomValidity('Выберите другой вариант');
  } else {
    roomNumberInputElement.setCustomValidity('');
  }

  roomNumberInputElement.reportValidity();
};

roomNumberInputElement.addEventListener('change', function () {
  validationRoomsAndGuests();
});

guestsInputElement.addEventListener('change', function () {
  validationRoomsAndGuests();
});

titleInputElement.addEventListener('input', function () { // Валидация поля ввода заголовка объявления
  const valueLength = titleInputElement.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInputElement.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInputElement.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  }  else {
    titleInputElement.setCustomValidity('');
  }

  titleInputElement.reportValidity();
});

pricePerNightElement.addEventListener('input', function () { // Валидация поля ввода цены
  const valuePrice = pricePerNightElement.value;

  if (valuePrice > MAX_PRICE) {
    pricePerNightElement.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);
  } else {
    pricePerNightElement.setCustomValidity('');
  }

  pricePerNightElement.reportValidity();
});

const resetAddForm = () => {
  addForm.reset();
  mapFilters.reset();
  mainMarker.setLatLng({lat: CENTER_LAT, lng: CENTER_LNG});
  addressForm.value = `${CENTER_LAT}, ${CENTER_LNG}`;
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAddForm();
});

const closeMessage = (evt) => {
  if (isEscEvent(evt) || isClickEvent(evt)) {
    evt.preventDefault();
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', closeMessage);
    document.removeEventListener('mousedown', closeMessage);
  }
};

const showSuccessMessage = () => {
  main.append(successMessage);
  resetAddForm();
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
};

const showErrorMessage = () => {
  main.append(errorMessage);
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
}

const setFormSubmit = () => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => showSuccessMessage(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

export {setFormSubmit};