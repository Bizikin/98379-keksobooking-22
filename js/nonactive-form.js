const adFormElement = document.querySelector('.ad-form');
const mapFiltersElement = document.querySelector('.map__filters');
const selectElements = mapFiltersElement.querySelectorAll('select');
const fieldsetElements = document.querySelectorAll('fieldset');

adFormElement.classList.add('ad-form--disabled');
mapFiltersElement.classList.add('ad-form--disabled');

const setDisabled = (element, disabled) => {
  element.disabled = disabled;
};

// selectElements.forEach(setDisabled);
// fieldsetElements.forEach(setDisabled);

const activeForm = () => {
  mapFiltersElement.classList.remove('ad-form--disabled');
  adFormElement.classList.remove('ad-form--disabled');
  // selectElements.forEach(setDisabled);
  // fieldsetElements.forEach(setDisabled);
}

export { activeForm };
