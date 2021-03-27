const adFormElement = document.querySelector('.ad-form');
const mapFiltersElement = document.querySelector('.map__filters');


adFormElement.classList.add('ad-form--disabled');
mapFiltersElement.classList.add('ad-form--disabled');


const activeForm = () => {
  mapFiltersElement.classList.remove('ad-form--disabled');
  adFormElement.classList.remove('ad-form--disabled');
}

export { activeForm };
