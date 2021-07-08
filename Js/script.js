/*var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name'
};
console.log('myNum: ', myNum);
console.log('myStr:', myStr);
console.log('myBool:', myBool);
console.log('myArr:', myArr);
console.log('myObj:', myObj);


var decimal2 = myNum.toFixed(2);

var i = 1;
console.log('префиксный инкремент:', ++i);
console.log('постфиксный инкремент:', i++);
console.log('Значение i:', i);
console.log('префиксный декремент:', --i);
console.log('префиксный декремент:', i--);
console.log('Значение i:', i);


var myTest = 20;
myTest += myNum;
console.log(myTest);
myTest -= myNum;
console.log(myTest);
myTest *= myNum;
console.log(myTest);
myTest /= myNum;
console.log(myTest);
myTest %= myNum;
console.log(myTest);

var myPi = Math.PI;
console.log('myPi', myPi);
var myRound = Math.round(89.279);
console.log('myRound', myRound);
var myRandom = Math.random() * 10;
console.log('myRandom', myRandom);
var myPow = Math.pow(3, 5);
console.log('myPow', myPow);


var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.lenth = strObj.str.length;
console.log('strObj', strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace', strReplace);

console.log(myStr.toUpperCase());
console.log('Любая строка'.toLowerCase());
*/

/*const { name } = require("browser-sync");


/*var person = {
  name: 'Jhon',
  age: 25,
  gender: 'male'
}

console.log(person.name);
console.log(person['name']);

person.age = 30;
person.userID = 100;

console.log(person);
*/


/*16 homework */

/* 1-2
var userObj = {
  age: 20,
  firstName: 'Ribok',
  lastName: 'Pupkin',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`

  }
};

console.log(userObj);
console.log(userObj.fullName());
*/
/*  3 */


/*let massage = "Привет";
let massageEnd;
if (5>10) {
 massageEnd = ", Вася!" 
} else if (5>30) {
  massageEnd = ", Оля!" 
} else if (5>1) {
  massageEnd = ", Кроконь!" 
}
massage += massageEnd;
console.log(massage);*/

/*let message = 5 > 2 ? "Привет, Вася" : "Привет, Оля!";
console.log(message);*/

          /*Циклы while? for*/
let num = 0;
while (num <= 5) {
  console.log(num);
  num++;
}
/*for (let num = 0; num < 3; num++) {
  console.log('Число: ${num}');
  
}*/
/* То же самое*/

/*let num = 0;
while (num < 3) {
  console.log('Число: ${num}');
  num++;
}
/*Директива break*/
/*let num = 0;
for (; num < 5; num++) {
  console.log(num);
  if (num == 2) break;
    
}
console.log(`Работа окончена, num = ${num}`);*/
  
/* Директива continue*/
  /*let num = 0;
for (; num < 10; num++) {
  
  if (num == 2) continue;
  if (num == 4) continue;
  if (num == 6) continue;
  console.log(num);  
}*/

/* Метки*/

/*firstFor: for (let num = 0; num < 12; num++) {
  for (let size = 0; size < 8; size++) {
    if (size == 4) {
      break firstFor;
    }
    console.log(size);
  }
 
}*/

/* Функции*/

/*function showMessage() {
  console.log('сообщение');
}
showMessage();*/
/* Локальная и внешняя переменная*/ 
/*let message = "Сообщение №1"; /*"Внешняя"*/
/*function showMessage() {
  let message = 'сообщение №2';/*Локальная*/
 /* console.log(message);


console.log(message);
/*showMessage();

/*Параметры(аргументы)*/
/*function calcSumm(numOne, numTwo) {
  console.log(`Переменная numOne:${numOne}`);
  console.log(`Переменная numOne:${numTwo}`);
  let numSumm = numOne + numTwo;



  console.log(`Сумма:${numSumm}`);

}
calcSumm(5, 210);*/

/*Функции калбэки*/
/*function calcSumm(numOne, numTwo, more, less) {
  let numSumm = numOne + numTwo;
  if (numSumm > 3) {
    more();
  } else {
    less();
  }
}
function showMoreMessage() {
  console.log('Больше чем 3');
}
function showLessMessage() {
  console.log('меньше чем 3');
}
calcSumm(1, 2, showMoreMessage, showLessMessage);*/


/* ВОЗВРАТ РЕЗУЛЬТАТА*/
/*function calcSumm(numOne, numTwo) {
  let numSumm = numOne + numTwo;
  //возврат
  return numSumm;
  //дальше код не выполняеться
}
let funkRezult = calcSumm(1, 2);
console.log(`Сумма: ${funkRezult}`);*/

/*Рекурсия*/
/*function calcSumm(numOne, numTwo) {
  let result = 1;
  //умножаем result на numOne numTwo раз в цикле
  for (let i = 0; i < numTwo; i++) {
   result *= numOne;
    
  }
  return result;
}
console.log(calcSumm(2, 3));
*/

function calcSumm(numOne, numTwo) {
  if (numTwo === 1) {
  return numOne  
  } else {
    return numOne * calcSumm(numOne, numTwo - 1);
  }
}
console.log(calcSumm(2, 3));

/* Функциональное выражение*/
let showMessage = function () {
  console.log('Привет!');
};
showMessage();

/* Однострочная стрелочная функция*/
let getMessage = (Text, name) => Text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));

/*Планирование setTimeout и setInterval*/
/*function showWord(text, name) {
  console.log(`${text}, ${name}!`);
}
setTimeout(showWord, 1000, 'Hello', 'Krokon');

/*function showNumber(num) {
  console.log(num);
  if (num < 5) {
    setTimeout(showNumber, 2000, ++num);
  }
}
setTimeout(showNumber, 2000, 1);*/

/*let result = 0;
function showNumber(num) {
  result += num;
  console.log(result);
  if (result === 5) {
    clearInterval(timeId);
  }
}
let timeId = setInterval(showNumber, 2000, 1);


/*Массивы */

var arrOne = [
  'Ваня', //0я позиция
  'Юра', //1я позиция
  'Оля', //2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]);// undefined

var arrTwo = [
  "Tiger",
  {
    type: "JS",
    age: 38,
  },
  true,
  function () {
    console.log('Hello, i am tiger!');
  }
];
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix);
console.log(matrix[2][2]);

/* Массив копируеться по ссылке*/
/*var arr = ['Igor', 'Vova', 'Sovik',];
var arrNew = arr;
arrNew.length = 2;
console.log(arr);
*/
/*Изменение значений*/

/*var arrFour = ['Fedor', 'Ivan', 'Fox',];
console.log(arrFour);
arrFour[0] = 'Felix';
console.log(arrFour);
arrFour[3] = 'Fedor';
console.log(arrFour);


/*Методы массивов*/
/*Push- добавляет элемент в конец массива*/
/*var arrFive = ['Grisha', 'Masha', 'Piter',];
console.log(arrFive);
arrFive.push('Strokon');
console.log(arrFive);

/*Shift- удаляет первый элемент массива*/
var arrSix = ['Grisha', 'Masha', 'Piter',];
arrSix.shift();
console.log(arrSix);

/*Pop- удаляет последний элемент массива*/
var arrSix = ['Grisha', 'Masha', 'Piter',];
arrSix.pop();
console.log(arrSix);

/*unshift- добавляет элемент в начало массива*/
var arrSix = ['Grisha', 'Masha', 'Piter',];
arrSix.unshift('Fedor', 'Ivan', 'Fox');
console.log(arrSix);

// Удаление/добавление/изменение конкретных элементов

var arrSeven = ['Grisha', 'Masha', 'Piter',];
delete arrSeven[1];
console.log(arrSeven);
console.log(arrSeven[1]);
console.log(arrSeven.length);

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
//Удаляем элемент
var arrEight = ['Grisha', 'Masha', 'Piter',];
 // начиная с первой позиции удаляем один элемент
arrEight.splice(1, 1);
console.log(arrEight);

//Удаляем элемент и возвращаем его в переменную
var arrFive = ['Grisha', 'Masha', 'Piter',];
let removed = arrFive.splice(1, 1);
console.log(removed);

//Заменяем элементы
/*var arrFour = ['Fedor', 'Ivan', 'Fox',];
// начиная с 0й позиции заменяем один элемент
arrFour.splice(0, 1, 'Гангстапес');
console.log(arrFour);*/
// Добавляем элементы
//начиная с первой позиции(после 0й)
var arrFour = ['Fedor', 'Ivan', 'Fox',];
arrFour.splice(1, 0, 'Robot', 'Momot');
console.log(arrFour);
//Удаляем элемент
//начиная с последней позиции удаляем один элемент
arrFour.splice(-1, 1);
console.log(arrFour);

//Создаем новый массив в который копируем часть либо весь массив
//часть
var arrTwelve = ['Grisha', 'Masha', 'Piter',];
//начиная с 1й позиции до 2й(не включая)
//var arrSixteen = arrTwelve.slice(1, 2);

// Скопировать весь массив
var arrSixteen = arrTwelve.slice();
console.log(arrSixteen);

// Метод concat
// Создает новый массив в который копирует данные из других массивов
// и дополнительные значения в конец массива
var arrConcat = ['Grisha', 'Masha', 'Piter',];
var arrCcres = arrConcat.concat('Daf');
console.log(arrCcres);

//поиск в массиве
//методы indexOf/lastindexof, includes
/* 1)arr.indexof(item, from) ищет iten ,начиная с индекса from,
и возвращает индекс на котором был найден искомый
элемент в противном случаи - 1
2)arr.lastindexof(item, from) -то же самое, но ищет справа налево
3)arr.includes(item, from)- ищет item, начиная с индекса from,
 и возвращает true если поиск успешен 
и false - если не успешен
*/
let arr = ['Igor', 'Vova', 'Sovik',];
console.log(arr.indexOf('Sovik'));
console.log(arr.indexOf('Ripak'));
console.log(arr.indexOf('Sovik', 3));


console.log(arr.includes('Sovik'));
console.log(arr.includes('Ripak'));
console.log(arr.includes('Sovik', 3));


//Поиск в массиве
// find,  findindex
// поиск в массиве обьектов с определенным условием
/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // true - возвращаеться текущий элемент и перебор прекращаеться
  // если все итерации оказались ложными, возвращаеться undefined
})
*/
var arrFind = [
  {name: 'Max', age: 34 },
  {name: 'Trofim', age: 35 },
  {name: 'Gena', age: 'Не скажу' },
]
var resFind = arrFind.find(function (item, index, array) {
  return item.age === 'Не скажу';
});
console.log(resFind);
/*Стрелочная функция(аналог)
let resFind = arrFind.find(item => item.age = 35);
console.log(resFind);
 */
//findindex
let resultTwo = arrFind.findIndex(item => item.age === 'Не скажу');
console.log(resultTwo);

//Сортировка массивов
// Метод sort(fn)/ Сортирует массив на месте, меняя в нем порядок элементов.
console.log(arr.sort());// слова
//числа
var arrNumbers = [8, 22, 1,];
console.log(arrNumbers.sort());
console.log("8" > "22");//true

//Функция сортировки
/*function compareNumeric(a, b) {
  console.log(`Сравниваем ${a} и ${b}`);
 if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;}*/
console.log(arrNumbers.sort((a, b) => a - b));//Стрелочная функция


//Метод reverse
//let arr = ['Igor', 'Vova', 'Sovik',];
console.log(arr.reverse());


//Преобразование массивов
// Метод mар
// Вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции
/* let result = arr.map(function(item, index, array) {
  //возвращаеться новое значение вместо элемента
})
*/
//let arr = ['Igor', 'Vova', 'Sovik',];
let resultMap = arr.map(function (item, index, array) {
  return item[2];
});
//let resultMap = arr.map(item => item[0]);
console.log(arr);
console.log(resultMap);

//Преобразование массивов
// Методы split, join
/* Метод split преобразовывает строку в массив по заданному разделителю */
let str = 'Igor,Vova,Sovik';
//let arrThree = str.split(',');

//можно ограничить кол-во обьектов которые попадут в массив

let arrThree = str.split(',', 2);
console.log(arrThree);

  // Метод join преобразовывает массив в стртоку с заданным разделителем
var arrFour = ['Igor', 'Vova', 'Sovik',];
var strOne = arrFour.join('/');
console.log(strOne);
console.log(String(arrFour));
  
  // Array.isArray()

  /*
  Массивы не образуют отдельный тип данных.
  Они основаны на обьектах.
   */
let obj = {};
let arrFivethe = [];
//Как нам узнать где обьект а где массив?
if (Array.isArray(arrFivethe)) {
  console.log('Это массив!');
} else {
  console.log('Это не массив!');
}


//Перебор элементов
/*let arrTwenty = ['Igor', 'Vova', 'Sovik',];
for (let index = 0; index < arrTwenty.length; index++) {
  console.log(arrTwenty[index]);
  
}*/


//for...of Можно использовать для вівода значений
/*let arrTwenty = ['Igor', 'Vova', 'Sovik',];
for (let iterator of arrTwenty) {
  console.log(iterator);
}*/

// Метод перебора forEach
//Выполняет функцию для каждого элемента массива
let arrTwenty = ['Igor', 'Vova', 'Sovik',];
/*arrTwenty.forEach(function (item, index, array) {
  console.log(`${item} находиться на ${index} позиции в ${array}`);
});*/


//стрелочная функция
arrTwenty.forEach((item, index, array) => {
  console.log(`${item} находиться на ${index} позиции в ${array}`)
});
// аналогично
/*
let arrTwenty = ['Igor', 'Vova', 'Sovik',];
arrTwenty.forEach(Show);
function show(item);
console.log(item);
 */

// методы reduce/reduceRight
let arrRed = [1, 2, 3, 4];
let reduceValueOne = arrRed.reduce(function (previousValue, currentValue, currentIndex, array) {
  return currentValue + previousValue;
}, 0);
console.log(reduceValueOne);