import './map.js';

const templateCard = document.querySelector('#card').content;

function getAdvertisementElement (advertisementElement) {

  const advertisement = templateCard.cloneNode(true);
  advertisement.querySelector('.popup__title').textContent = advertisementElement.offer.title;
  advertisement.querySelector('.popup__text--address').textContent = advertisementElement.offer.address;
  advertisement.querySelector('.popup__text--price').textContent = `${advertisementElement.offer.price} ₽/ночь`;

  let typeHousing = advertisementElement.offer.type;
  switch (typeHousing) {
    case 'flat':
      typeHousing = 'Квартира';
      break;
    case 'bungalow':
      typeHousing = 'Бунгало';
      break;
    case 'house':
      typeHousing = 'Дом';
      break;
    case 'palace':
      typeHousing = 'Дворец';
      break;
  }

  advertisement.querySelector('.popup__type').textContent = typeHousing;
  advertisement.querySelector('.popup__text--capacity').textContent = `${advertisementElement.offer.rooms} комнаты для ${advertisementElement.offer.guests} гостей.`;
  advertisement.querySelector('.popup__text--time').textContent = `Заезд после ${advertisementElement.offer.checkin}, выезд до ${advertisementElement.offer.checkout}`;

  advertisementElement.offer.features.forEach((feature) => {
    advertisement.querySelector(`.popup__feature--${feature}`).classList.remove('hidden');
  })

  advertisementElement.offer.photos.forEach((srcImage) => {
    const srcImageElement = advertisement.querySelector('.popup__photo').cloneNode(false);
    srcImageElement.src = srcImage;
    srcImageElement.classList.remove('hidden');
    advertisement.querySelector('.popup__photos').appendChild(srcImageElement);
  });

  advertisement.querySelector('.popup__avatar').src = advertisementElement.author.avatar;

  return advertisement;
}

export {getAdvertisementElement};

