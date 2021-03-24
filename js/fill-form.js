const typeEstateElement = document.querySelector('#type');
const pricePerNightElement = document.querySelector('#price');
const timeInSelectElement = document.querySelector('#timein');
const timeOutSelectElement = document.querySelector('#timeout');
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
