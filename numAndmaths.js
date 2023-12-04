let score =90;
// console.log(score);//400
let balance = new Number(400);
// console.log(balance);[number:400]

let price = 8.593;
//round off the number
// console.log(price.toFixed(2));//roundoff the number to two digit after decimal
const otherNumber =23.8966
// console.log(otherNumber.toPrecision(4));//roundoff number to 4 digits including decimal
const otherNumberMore = 1123.8966
// console.log(otherNumberMore.toPrecision(3));//1.12e+3(3 precision value baaki exponential value)
let budget = 100000;
// console.log(budget.toLocaleString( ));//100,000 --by default US standard
// console.log(budget.toLocaleString('en-In'));//1,00,000-- to get value accr  to Indian standard

// let scoreString= console.log(score.toString());
// console.log(typeof scoreString);//converted to string 
//when number converted to string different properties of string can be use here

Number.MAX_VALUE//number ki maximum value inside JS
Number.MIN_VALUE//
Number.MAX_SAFE_INTEGER//yahi safe Integer h ,itna hi value mai store ker sakta hu

// +++++++++++++++++++++++++++++++++             Maths                 +++++++++++++++++++++++++++++++

// console.log(Math.abs(-4));//4 it converts -ve to +ve.Not vice versa true[abs-absolute]
// console.log(Math.abs(4));//4
// console.log(Math.round(4.7));//round off number to 5
// console.log(Math.ceil(4.2)); //5 top value
// console.log(Math.floor(4.9));//4 lowest value
// console.log(Math.sqrt(25));//5
// console.log(Math.pow(8,2));//64
// console.log(Math.min());//Infinity
// console.log(Math.min(4,3,7,2));//2
// console.log(Math.max());//-Infinity
// console.log(Math.max(4,3,7,2));//7
// console.log(Math.random());//any random number between 0 and 1(mostly decimal)
// console.log((Math.random()*10)+1);//number = or > than 1
// console.log(Math.floor(Math.random()*10)+1);
// let min=30; let max=40;
// console.log(Math.floor(Math.random()*(max-min+1))+min);










//node numAndmaths.js