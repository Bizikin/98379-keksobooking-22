import {showAlert, pushSuccessMessage, pushFailureMessage} from './util.js';

function getData() {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      return json;
    })
    .catch(() => {
      showAlert('Отсутствует соединение с сервером. Проверьте подключение к интернету.');
    });
}
  
function pushData(formData) {
  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(pushSuccessMessage)
    .catch(pushFailureMessage);
}

export { getData, pushData};
