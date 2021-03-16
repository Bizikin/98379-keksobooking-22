import {createAdverts} from './create-advert.js';
import {showOffers} from './show-offers.js';

const deals = createAdverts();

showOffers(deals);