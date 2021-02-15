'use strict'

let getRandomInt = function(min, max) {
  return getRandomFloat(min, max, 0);
}

let getRandomFloat = function(min, max, countComma) {
  if (max > min && min >= 0) {
    return parseFloat(((Math.random() * (max - min)) + min).toFixed(countComma));
  } else {
    alert('Ошибка, значение минимальной переменной не должно быть отрицательным, больше максимального или равным ему');
  }
}


//ТРЕТЬЕ ДОМАШНЕЕ ЗАДАНИЕ

//функция для получения случайного значения из массива строк
let getRandomValue = function(obj) {
  return obj[getRandomInt(0, obj.length - 1)];
}

let getRandomArray = function(array, values) {
  let newArray = [];
  for (let i = 0; i < values; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}



// объекты-библиотеки содержащие значения

const TITLE_VALUES = [
  'Каморка мечты',
  'Белый дом',
  'Уютное гнездо',
  'Независимый подвал',
  'Берлога туземца',
];

const TYPE_VALUES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_VALUES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_VALUES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESC_VALUES = [
  'Всё о чём можно мечтать',
  'Подходит для последней ночи на планете',
  'Вековая история за смешные деньги',
  'Хороший номер, холодильник за доп плату',
  'Результат вашего поиска',
];

const PHOTO_VALUES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

//объекты по условиям домашнего задания

let example;
let new_array;

let createAdvert = function() {
  let example = {
    autor: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png'
    },
    offer: {
      title: getRandomValue(TITLE_VALUES),
      address: location1.x + ',' + location1.y,
      price: getRandomInt(1, Number.MAX_SAFE_INTEGER),
      type: getRandomValue(TYPE_VALUES),
      rooms: getRandomInt(1, Number.MAX_SAFE_INTEGER),
      guests: getRandomInt(1, Number.MAX_SAFE_INTEGER),
      checkin: getRandomValue(CHECK_VALUES),
      checkout: getRandomValue(CHECK_VALUES),
      features: getRandomArray(FEATURES_VALUES, getRandomInt(1, FEATURES_VALUES.length)),
      description: getRandomValue(DESC_VALUES),
      photos: getRandomArray(PHOTO_VALUES, getRandomInt(1, PHOTO_VALUES.length))
    }
  }
  console.log(example);
  return example;
}

let location1 = {
  x: getRandomFloat(35.65000, 35.70000, 5),
  y: getRandomFloat(139.70000, 139.80000, 5)
}
//создание массива
let createAdverts = function() {
   for (let i = 0; i>10;i++) {
   	 
    new_array = example.map(createAdvert());
    return new_array;
	}
}




// console.log(autor.avatar);
// console.log(offer.title);
// console.log(offer.address);
// console.log(offer.price);
// console.log(offer.type);
// console.log(offer.rooms);
// console.log(offer.guests);
// console.log(offer.checkin);
// console.log(offer.checkout);
// console.log(offer.features);
// console.log(offer.description);
// console.log(offer.photos);
createAdverts();
console.log(new_array);
