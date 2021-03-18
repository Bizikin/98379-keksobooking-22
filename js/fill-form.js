const typeEstateElement = document.querySelector('#type');
const pricePerNightElement = document.querySelector('#price');
const timeInSelectElement = document.querySelector('#timein');
const timeOutSelectElement = document.querySelector('#timeout');
const bungalowMinPrice = 0;
const flatMinPrice = 1000;
const houseMinPrice = 5000;
const palaceMinPrice = 10000;


typeEstateElement.addEventListener('click', function(e) {
  e.preventDefault();
  if (typeEstateElement.value == 'bungalow') {
    pricePerNightElement.placeholder = bungalowMinPrice;
    pricePerNightElement.min = bungalowMinPrice;
  } else if (typeEstateElement.value == 'flat') {
    pricePerNightElement.placeholder = flatMinPrice;
    pricePerNightElement.min = flatMinPrice;
  } else if (typeEstateElement.value == 'house') {
    pricePerNightElement.placeholder = houseMinPrice;
    pricePerNightElement.min = houseMinPrice;
  } else if (typeEstateElement.value == 'palace') {
    pricePerNightElement.placeholder = palaceMinPrice;
    pricePerNightElement.min = palaceMinPrice;
  }
});

timeInSelectElement.addEventListener('change', (evt) => {
  const time = evt.target.value;
  timeOutSelectElement.value = time;
});
