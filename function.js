// function sayMyName(){
//     console.log("A");
//     console.log("L");
//     console.log("K");
//     console.log("A");
// }
// //to get consloe we have to call the function
// sayMyName();//A
            //L
            //K
            //A
    // function addTwoNumber(num1,num2){
    // console.log(num1+num2);
    //  }
    // //  addTwoNumber();//NaN
    //  addTwoNumber(3,4);
        
    //  function addTwoNumber(num1,num2){
    //  let result= num1+num2;
    //  return result;
    //  console.log("no work is done after return");//No work is done after return
    //  }
    //  console.log(addTwoNumber(3,4));


// function loginUsermessage(username= "sam"){
//     if (username) {
//         console.log("Please enter a username");
//         return
//         }
// return `${username}just logged In`
// }//this return will work or not
// console.log(loginUsermessage("Alka"));//when cond of if statement is true return written out of that scope will not work.

// function carprice(val1, val2, ...num){
//   return num;  
// }
// console.log(carprice(200, 300, 400, 500));//[400,500]
//200 assigned to val1
// 300 assigned to val2
// 400 and 500 assigned to num

// const user = {
//     username :"alka",
//     price:399
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// // handleObject(user);//Username is alka and price is 399
// handleObject({
//     username:"alkaRao",
//     price :400
// })//Username is alkaRao and price is 400

const myNewArray =[200, 400 ,100,600]
function returnSecvalue(getArray){
    return getArray[1]
}

console.log(returnSecvalue(myNewArray));//400
console.log(returnSecvalue([200,400,500,1000]));//400
