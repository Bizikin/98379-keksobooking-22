import {
  TITLE_VALUES,
  TYPE_VALUES,
  TIME_VALUES,
  FEATURES_VALUES,
  DESC_VALUES,
  PHOTO_VALUES,
  MAX_ROOMS,
  MAX_PRICE,
  MAX_GUESTS
} from './data.js';

import {
  getRandomInt,
  getRandomFloat,
  getRandomValue,
  getRandomArray
} from './util.js';


let createAdvert = function() {
  const loc = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  }
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: getRandomValue(TITLE_VALUES),
      address: loc.x + ', ' + loc.y,
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
}

const DEALS_COUNT = 10;

let createAdverts = function() {
  const arrayCards = [];
  for (let i = 1; i < DEALS_COUNT; i++) {
    arrayCards.push(createAdvert());
  }
  return arrayCards;
}


// const createAdverts = () => new Array(DEALS_COUNT).fill(null).map(() => createAdvert());

export { createAdverts };
