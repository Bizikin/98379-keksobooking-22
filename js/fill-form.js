const typeEstate = document.querySelector('#type');
const pricePerNight = document.querySelector('#price');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');


typeEstate.addEventListener('click', function(e) {
  e.preventDefault();
  if (typeEstate.value == 'bungalow') {
    pricePerNight.placeholder = '0';
    pricePerNight.min = '0';
  } else if (typeEstate.value == 'flat') {
    pricePerNight.placeholder = '1000';
    pricePerNight.min = '1000';
  } else if (typeEstate.value == 'house') {
    pricePerNight.placeholder = '5000';
    pricePerNight.min = '5000';
  } else if (typeEstate.value == 'palace') {
    pricePerNight.placeholder = '10000';
    pricePerNight.min = '10000';
  }
});

timeInSelect.addEventListener('change', (evt) => {
  const time = evt.target.value;
  timeOutSelect.value = time;
});
