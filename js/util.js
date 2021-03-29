let getRandomInt = (min, max) => {
  return getRandomFloat(min, max, 0);
}

let getRandomFloat = (min, max, countComma) => {
  if (max > min && min >= 0) {
    return parseFloat(((Math.random() * (max - min)) + min).toFixed(countComma));
  } else {
    alert('Ошибка, значение минимальной переменной не должно быть отрицательным, больше максимального или равным ему');
  }
}

let getRandomValue = (obj) => {
  return obj[getRandomInt(0, obj.length - 1)];
}

let getRandomArray = (array, values) => {
  let list = [];
  for (let i = 0; i < values; i++) {
    list.push(array[i]);
  }
  return list;
}

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isClickEvent = (evt) => {
  return evt.type === 'click';
};


export {getRandomInt, getRandomFloat, getRandomValue, getRandomArray, showAlert, isEscEvent, isClickEvent};