// const map = new Map()
    // map.set('In',"India")
    // map.set('us',"united state of America")
    // console.log(map);
// ++++++++++++++++++++++++++++++++++++++For of loop used in map ++++++++++++++++++++++++++++++++++++++
    // for (const key of map) {
    //     console.log(key);
        
    // }
    // for (const [key] of map) {
    //     console.log(key);
        
    // }//In
     // us

    //  for (const [key,value] of map) {
    //     console.log(key,value);
        
    // }
     //++++++++++++++++++++++++++++++++++++++++for of loop over objects ++++++++++++++++++++++++++++++++++++++++

// const myObject ={
//     game1 : 'NFS',
//     game2 :"Spiderman"
// }
// for (const [key,value] of myObject){
//     console.log(key,value);
// } //not iterable using for of loop

// const myObject ={
//     "game1" : 'NFS',
//     "game2" :"Spiderman"
// }
// for (const [key,value] of myObject){
//     console.log(key,value);
// } //not iterable using for of loop

 //++++++++++++++++++++++++++++++++++++++++for in loop for object+++++++++++++++++++++++++++++++++++++++

//  const myObject ={
    //  "game1" : 'NFS',
    //  "game2" :"Spiderman",
    //  cpp :'cpp',
    //  js: 'javaScript'
// }

// for (const key in myObject) {
//   console.log(key);
        
// }//game1
// game2
// cpp  
// js

// for(const key in myObject){
//   console.log(myObject[key]);
// }//NFS
// Spiderman 
// cpp       
// javaScript

 //++++++++++++++++++++++++++++++++++++++++for in loop for array ++++++++++++++++++++++++++++++++++++
// const programming = ["js",'rb',"py","java","cpp"]
// for (const key in programming) {
//  console.log(key);
// }//array ki key 0 se start hoti h and by default number hi hoti h,while in case of number hum jo chahe keys daal sakte h.

// const programming = ["js",'rb',"py","java","cpp"]
// for (const key in programming) {
//  console.log(programming[key]);
// }//js  
// rb  
// py  
// java
// cpp

// const secMap = new Map()
// secMap.set('In',"India")
//     secMap.set('us',"united state of America")
//     secMap.set('Fr',"France")
// // console.log(secMap);
// for(const key in secMap){
//   // console.log(key);
// }//map is not iterable by for in loop


 //++++++++++++++++++++++++++++++++++++++++for each loop for array ++++++++++++++++++++++++++++++++++

// const coding =["js","ruby","java"]
// coding.forEach(function(item){
  // console.log(item);
// })
// js  
// ruby
// java
 
// const fruits=["apple","mango","orange"]
// fruits.forEach((index)=>{
  // console.log(index);
// })
// apple 
// mango 
// orange  
  
 
// function printMe(index){
  // console.log(index);
// }
// fruits.forEach(printMe)

// const coding =["js","ruby","java"]
// coding.forEach((item,index,arr)=>{
  // console.log(item,index,arr);
// })
//js 0 [ 'js', 'ruby', 'java' ]
// ruby 1 [ 'js', 'ruby', 'java' ]
// java 2 [ 'js', 'ruby', 'java' ]

// const myCoding= [//object inside array
//   {
//     languageName :'JavaScript',
//     languageFileName:"js"
//   },
//   {
//     languageName :'Java',
//     languageFileName:"java"
//   },
//   {
//     languageName :'python',
//     languageFileName:"py"
//   }
// ]
// myCoding.forEach((item)=>{
//   console.log(item.languageName);
// })//JavaScript
  // Java
  // python

  // const values = coding.forEach((item)=>{
    // console.log(item);
    // return item
     //forEach never return values even if return keyword is used
  // })

  // const values = coding.forEach((item)=>{
    // console.log(item);
  // })






