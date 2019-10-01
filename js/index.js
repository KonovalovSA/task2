    // Поиск максимального значения в массиве
function getMaxValue(array){
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
      if (max < array[i]) max = array[i]; 
  }
  document.getElementById('inp').value = max;
}

btn.onclick = function() {
  let numbers = document.getElementById('inp').value;
    // Записываем в массив "числа"(строки) введенные пользователем без учёта ","
  let array = numbers.split(",");
    // Преобразуем каждый элемент массива из строки в число
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
    // Ищем максимальное число введенное пользователем
  getMaxValue(array);
}

