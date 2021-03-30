import {pushData} from './server.js';
import {mainLatLngElement, resetMainMarker} from './map.js';

const formElement = document.querySelector('.ad-form');
const interactiveElements = formElement.querySelectorAll('fieldset');
const mapFormElement = document.querySelector('.map__filters');
const mapFilterElements = mapFormElement.querySelectorAll('select');
const priceElement = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacityGuests = document.querySelector('#capacity');
const closeButton = document.querySelector('.ad-form__reset');

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const titleAdvertisement = document.querySelector('#title');

const MIN_VALUE_FOR_HOUSING = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

const MAX_PRICE = 1000000;

const capacityGuestsOne = capacityGuests[2];
const capacityGuestsTwo = capacityGuests[1];
const capacityGuestsThree = capacityGuests[0];
const capacityGuestsHundred = capacityGuests[3];

function switchForm () {
  formElement.classList.toggle('ad-form--disabled');
  mapFormElement.classList.toggle('ad-form--disabled');

  interactiveElements.forEach((element) => {
    element.toggleAttribute('disabled');
  })

  mapFilterElements.forEach((element) => {
    element.toggleAttribute('disabled');
  })

  setDefault();

  if (capacityGuestsOne.hasAttribute('disabled')) {
    capacityGuestsOne.removeAttribute('disabled');
  }
}

function onChangePrice (evt) {
  const typeHousingSelected = evt.target.value;
  priceElement.value = MIN_VALUE_FOR_HOUSING[typeHousingSelected];
  priceElement.placeholder = MIN_VALUE_FOR_HOUSING[typeHousingSelected];
}

function onChangeTimeIn (evt) {
  const time = evt.target.value;
  const timeOut = document.querySelector('#timeout');
  switch (time) {
    case '12:00':
      timeOut.value = '12:00';
      break;
    case '13:00':
      timeOut.value = '13:00';
      break;
    case '14:00':
      timeOut.value = '14:00';
      break;
  }
}

function onChangeTimeOut (evt) {
  const time = evt.target.value;
  const timeIn = document.querySelector('#timein');
  switch (time) {
    case '12:00':
      timeIn.value = '12:00';
      break;
    case '13:00':
      timeIn.value = '13:00';
      break;
    case '14:00':
      timeIn.value = '14:00';
      break;
  }
}

document.querySelector('#type').addEventListener('change', onChangePrice);
document.querySelector('#timein').addEventListener('change', onChangeTimeIn);
document.querySelector('#timeout').addEventListener('change', onChangeTimeOut);

titleAdvertisement.addEventListener('input', () => {
  const valueLength = titleAdvertisement.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    titleAdvertisement.setCustomValidity(`Добавьте ещё ${MIN_NAME_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleAdvertisement.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} символы`);
  } else {
    titleAdvertisement.setCustomValidity('');
  }
  titleAdvertisement.reportValidity();
});

priceElement.addEventListener('input', () => {
  if (priceElement.value > MAX_PRICE) {
    priceElement.setCustomValidity('Введенная сумма превышает максимально возможное значение');
  } else {
    priceElement.setCustomValidity('');
  }
  priceElement.reportValidity();
});

function setFormDefault () {
  document.querySelector('.ad-form').reset();
  document.querySelector('#address').value = '';
  mainLatLngElement.value = '35.68951, 139.69200';
  resetMainMarker();
}

function setDefault() {
  capacityGuestsOne.setAttribute('disabled', 'disabled');
  capacityGuestsTwo.setAttribute('disabled', 'disabled');
  capacityGuestsThree.setAttribute('disabled', 'disabled');
  capacityGuestsHundred.setAttribute('disabled', 'disabled');
}

roomNumber.addEventListener('change', () => {

  if (roomNumber.value === '100') {
    setDefault();
    capacityGuestsHundred.removeAttribute('disabled');
  } else if (roomNumber.value === '1') {
    setDefault();
    capacityGuestsOne.removeAttribute('disabled');
  } else if (roomNumber.value === '2') {
    setDefault();
    capacityGuestsOne.removeAttribute('disabled');
    capacityGuestsTwo.removeAttribute('disabled');
  } else if (roomNumber.value === '3') {
    setDefault();
    capacityGuestsOne.removeAttribute('disabled');
    capacityGuestsTwo.removeAttribute('disabled');
    capacityGuestsThree.removeAttribute('disabled');
  }
});


function createAdvertisementInServer() {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    pushData(formData);
  });
}

function clearFormElement () {
  closeButton.addEventListener('click', setFormDefault);
}

clearFormElement();

createAdvertisementInServer();

export {switchForm, clearFormElement, setFormDefault};
