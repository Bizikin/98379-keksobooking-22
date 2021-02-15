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



// справочники содержащие значения

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

const TIME_VALUES = [
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

 


const MAX_ROOMS = 3;
const MAX_PRICE = 100000;
const MAX_GUESTS = 5;


let createAdvert = function() {
  let loc = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  }
  let result = {
    autor: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: getRandomValue(TITLE_VALUES),
      address: loc.x + ',' + loc.y,
      price: getRandomInt(1, MAX_PRICE),
      type: getRandomValue(TYPE_VALUES),
      rooms: getRandomInt(1, MAX_ROOMS),
      guests: getRandomInt(1, MAX_GUESTS),
      checkin: getRandomValue(TIME_VALUES),
      checkout: getRandomValue(TIME_VALUES),
      features: getRandomArray(FEATURES_VALUES, getRandomInt(0, FEATURES_VALUES.length)),
      description: getRandomValue(DESC_VALUES),
      photos: getRandomArray(PHOTO_VALUES, getRandomInt(1, PHOTO_VALUES.length)),
    },
    location: {
      x: loc.x,
      y: loc.y,
    },
  }
  // let advert = Object.assign(example.autor, example.offer);
  // console.log(advert);
  return result;
}


//создание массива
let createAdverts = function(count) {
  const result = [];
  for (let i = 1; i < count; i++) {
    result.push(createAdvert());
  }
  return result;
}

// console.log(createAdverts(n));