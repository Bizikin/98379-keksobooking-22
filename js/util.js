let getRandomInt = function(min, max) {
  return getRandomFloat(min, max, 0);
}

let getRandomFloat = function(min, max, countComma) {
  if (max > min && min >= 0) {
    return parseFloat(((Math.random() * (max - min)) + min).toFixed(countComma));
  } else {
    alert('Ошибка, значение минимальной переменной не должно быть отрицательным, больше максимального или равным ему');
  }
}

let getRandomValue = function(obj) {
  return obj[getRandomInt(0, obj.length - 1)];
}

let getRandomArray = function(array, values) {
  let newArray = [];
  for (let i = 0; i < values; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

export {getRandomInt, getRandomFloat, getRandomValue, getRandomArray};