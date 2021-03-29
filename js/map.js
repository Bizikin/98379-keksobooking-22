/* global L:readonly */
import { adverts } from './create-advert.js';
import { showOffer } from './show-offers.js';
import { activeForm } from './nonactive-form.js';



const TOKIO_CENTER_LAT = 35.68950;
const TOKIO_CENTER_LNG = 139.69171;
const DEFAULT_ZOOM = 12;

const map = L.map('map-canvas').on('load', () => {
  activeForm();
}).setView({
  lat: TOKIO_CENTER_LAT,
  lng: TOKIO_CENTER_LNG,
}, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondPinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker({
  lat: TOKIO_CENTER_LAT,
  lng: TOKIO_CENTER_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});


mainMarker.addTo(map);

const locationPoint = mainMarker.getLatLng();
const DOTSAFTERZERO = 5;

const address = document.querySelector('#address');
address.value = `${locationPoint.lat}, ${locationPoint.lng}`

mainMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(DOTSAFTERZERO)}, ${evt.target.getLatLng().lng.toFixed(DOTSAFTERZERO)}`;
});

for (let advert of adverts) {
  const secondMarker = L.marker({
    lat: advert.location.x,
    lng: advert.location.y,
  }, {
    icon: secondPinIcon,
  });
  secondMarker.addTo(map).bindPopup(
    showOffer(advert)
  );
}


const createAdList = (data) => {
  data.forEach((element) => {
    const marker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: secondPinIcon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(
        showOffer(advert)
      );
  });
};

export {createAdList, mainMarker, TOKIO_CENTER_LAT, TOKIO_CENTER_LNG};