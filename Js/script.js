var myNum = 10;
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