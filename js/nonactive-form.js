const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const selects = mapFiltersForm.querySelectorAll('select');
const fieldsets = document.querySelectorAll('fieldset');

form.classList.add('ad-form--disabled');
mapFiltersForm.classList.add('ad-form--disabled');

const addDisabled = (element) => {
  element.disabled = true;
};

const removeDisabled = (element) => {
  element.disabled = false;
};


selects.forEach(addDisabled);
fieldsets.forEach(addDisabled);

const activeForm = () => {
  mapFiltersForm.classList.remove('ad-form--disabled');
  form.classList.remove('ad-form--disabled');
  selects.forEach(removeDisabled);
  fieldsets.forEach(removeDisabled);
}

export {activeForm};