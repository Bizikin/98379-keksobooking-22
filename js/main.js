import './fill-form.js';
import './nonactive-form.js';
import './map.js';


import {getData} from './api.js';
import {createAdList} from './map.js'
import {setFormSubmit} from './fill-form.js'

getData((data) => {
  createAdList(data);
});

setFormSubmit();