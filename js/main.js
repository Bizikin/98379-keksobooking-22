let getRandomInt = function(min, max) {
  return getRandomFloat(min,max,0);
}

let getRandomFloat = function(min, max, countComma) {
  if (max>min && min>=0) {
  return parseFloat(((Math.random() * (max - min)) + min).toFixed(countComma)); 
  }
  else {
    console.log('Ошибка, значение минимальной переменной не должно быть отрицательным, больше максимального или равным ему');
    }
}

getRandomInt();
getRandomFloat();
console.log('Полученное значение: '+getRandInt(2.6,3.5,0));