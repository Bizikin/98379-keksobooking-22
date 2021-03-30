/* global L*/

import {switchForm} from './form.js';
import {getAdvertisementElement} from './get-card.js';

const mainLatLngElement = document.querySelector('#address');
mainLatLngElement.value = '35.68951, 139.69200';

const LAT = 35.68951;
const LNG = 139.69200

const QUANTITY_ADVERTISEMENT = 10;

const myIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [38, 95],
  iconAnchor: [26, 52],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

const mainMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: myIcon,
  },
);

const commonIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [38, 95],
  iconAnchor: [26, 52],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

const commonMarker = L.marker(
  {
    icon: commonIcon,
  });


const map = L.map('map-canvas');

function setMainMarker () {
  mainMarker.addTo(map);
}

function resetMainMarker () {
  mainMarker.setLatLng([LAT, LNG]);
}

switchForm();

function initMap() {
  map.on('load', () => {
    switchForm();
    mainLatLngElement.value = '35.68951, 139.69200';
  })
    .setView([LAT, LNG], 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  setMainMarker();
  
  mainMarker.on('moveend', (evt) => {
    document.querySelector('#address').value = `${parseFloat(evt.target.getLatLng().lat).toFixed(5)}, ${parseFloat(evt.target.getLatLng().lng).toFixed(5)}`;
  });
}

function removeMarkers(list) {  
  list.forEach(() => {
    commonMarker.remove();
  });
}
const arrayMarkers = [];
function createMarkers(element) {

  const commonMarker = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng,
    },
    {
      icon: commonIcon,
    },
  );
  
  commonMarker.addTo(map);
  commonMarker.bindPopup(getAdvertisementElement(element));
}

function setCommonMarkers(list) {
  list.slice(0, QUANTITY_ADVERTISEMENT).forEach((advertisement) => {

    createMarkers(advertisement);
  });
}

export { initMap, mainLatLngElement, resetMainMarker, setCommonMarkers, removeMarkers, createMarkers, arrayMarkers};
