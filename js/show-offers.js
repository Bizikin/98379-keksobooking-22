const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

//Заменяем тип жилья из массива на текст
const stringifyOfferType = function(params) {
  if (params === 'flat') {
    return 'Квартира'
  } else if (params === 'bungalow') {
    return 'Бунгало'
  } else if (params === 'house') {
    return 'Дом'
  } else {
    return 'Дворец'
  }
}

//Заполняем список с особенностями жилья
const setupFeatures = function(params, key) {
  params.textContent = '';
  for (let i = 0; i < key.features.length; i++) {
    let featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add('popup__feature--'.concat(key.features[i]));
    params.append(featureItem);
  }
}

// Создаем картинки жилья
const setupPhotos = function(params, key) {
  params.textContent = '';
  for (let i = 0; i < key.photos.length; i++) {
    let imgitem = document.createElement('img');
    imgitem.classList.add('popup__photo');
    imgitem.src = key.photos[i];
    imgitem.title = 'Фотография жилья';
    imgitem.width = '45';
    imgitem.height = '40';
    params.append(imgitem);
  }
}

const showOffer = function({ author, offer }) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = stringifyOfferType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после '.concat(offer.checkin, ' выезд до ', offer.checkout);
  cardElement.querySelector('.popup__description').textContent = offer.description;
  setupFeatures(cardElement.querySelector('.popup__features'), offer);
  setupPhotos(cardElement.querySelector('.popup__photos'), offer);

  return cardElement;
}

export { showOffer };
