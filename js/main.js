import {createAdverts} from './create-advert.js';
import {showOffers} from './show-offers.js';

const adverts = createAdverts();

showOffers(adverts);