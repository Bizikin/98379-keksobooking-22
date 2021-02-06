let getRandomInt = function(min, max) {
  return getRandomFloat(min, max, 0);
}

let getRandomFloat = function(minNum, maxNum, countComma) {
  if (maxNum > minNum && minNum >= 0) {
    return parseFloat(((Math.random() * (maxNum - minNum)) + minNum).toFixed(countComma));
  } else {
    console.log('Ошибка, значение минимальной переменной не должно быть отрицательным, больше максимального или равным ему');
  }
}
