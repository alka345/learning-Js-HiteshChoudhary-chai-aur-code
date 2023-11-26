//declaring object as literal
// const user ={name : "Alka",
//  age : 24,
//  "fullName":"alkaRao",
// lastLoginDays:["mon","tues"]}

// // access values
// console.log(user.age);//24
// console.log(user["age"]);//24
// console.log(user["fullName"]);//alkaRao

// //overwrite values
// // const newName =
// user.name ="warrior";
// console.log(user.name);//warrior

//declaring Symbol
const mySym =Symbol("key1")
const Jsuser ={name : "Alka",
 age : 24,
//  mySym:"myKey1",
 [mySym]:"myKey1",
 "myFullName":"alkaRao",
lastLoginDays:["mon","tues"]}

// // accessing symbol
// console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);
console.log(Jsuser);
// ************output*************

// {
//     name: 'Alka',
//     age: 24,
//     myFullName: 'alkaRao',
//     lastLoginDays: [ 'mon', 'tues' ],
//     [Symbol(key1)]: 'myKey1'
//   }


// user.greeting = function(){
//     console.log(`hello ${this.name}`);
// }
// console.log(user.greeting());
// console.log(user.greeting);

// const tinderuser = new Object();
// const tinderuser ={};
// tinderuser.id = "123abc";
// tinderuser.name="reena";
// console.log(tinderuser);

// const regularUser ={
// name :{
// age :{
// fullName:"alkaRao"
// }}}
// console.log(regularUser.name.age.fullName);

// const obj1={1:"a",2:"b"};
// const obj2={3:"c",4:"d"};
// const obj3={obj1,obj2}
// const obj3 =Object.assign(obj1,obj2)
// const obj3 ={...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(obj3));//gives an array
// console.log(Object.values(obj3));//gives an array
// console.log(Object.entries(obj3));//gives an array


//  const user ={name : "Alka",
//  age : 24,
//   "fullName":"alkaRao",
//  lastLoginDays:["mon","tues"]}

// console.log(user.hasOwnProperty("name"));//?
// console.log(user.hasOwnProperty('4'));//?
// *******************Destructing************************

// const user ={name : "Alka",
//  age : 24,
//  "fullName":"alkaRao",
// lastLoginDays:["mon","tues"]}

// console.log(user.name);
// const {name} = user;
// console.log(name);

// const { name :n}=user;
// console.log(n);