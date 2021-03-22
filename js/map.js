import { createAdverts } from './create-advert.js';
import { showOffers } from './show-offers.js';
import { activeForm } from './nonactive-form.js';


const L = window.L;
const tokioCenterLat = 35.68950;
const tokioCenterLng = 139.69171;

const map = L.map('map-canvas').on('load', () => {
  activeForm();
}).setView({
  lat: tokioCenterLat,
  lng: tokioCenterLng,
}, 12);

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
  lat: tokioCenterLat,
  lng: tokioCenterLng,
}, {
  draggable: true,
  icon: mainPinIcon,
}, );


mainMarker.addTo(map);

const locationPoint = mainMarker.getLatLng();
const DOTSAFTERZERO = 5;

const address = document.querySelector('#address');
address.value = `${locationPoint.lat}, ${locationPoint.lng}`

mainMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(DOTSAFTERZERO)}, ${evt.target.getLatLng().lng.toFixed(DOTSAFTERZERO)}`;
});

console.log(createAdverts);

for (let oneOffer of createAdverts) {
  const secondMarker = L.marker({
    lat: oneOffer.location.x,
    lng: oneOffer.location.y,
  }, {
    icon: secondPinIcon,
  }, );
  secondMarker.addTo(map).bindPopup(showOffers(createAdverts));
}
