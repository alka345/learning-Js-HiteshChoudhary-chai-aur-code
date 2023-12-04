// const promiseOne =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"alka", email:"alka@gmail.com"})
//     },1000)

// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resolve({username:"alka",password:"123"})//when this condition get fulfilled console(user) & console(username) get printed
//         }else{
//             reject('ERROR:Something went wrong')//in case of reject(when else condition fulfilled) ,msg inside reject get printed & msg inside final get printed 
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);//{ username: 'alka', password: '123' } 
//     return user.username
// }).then((username)=>{
// console.log(username);//alka
// }).catch(function(error){
// console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected"))

// const promiseFive =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true;
//         if(!error){
//             resolve({username:"JavaScript",password:"123"})//when this condition get fulfilled console(user) & console(username) get printed
//         }else{
//             reject('ERROR:JS went wrong')//in case of reject(when else condition fulfilled) ,msg inside reject get printed & msg inside final get printed 
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive//promiseFive me jo bhi value hogi wo aa jyegi isme 
//     console.log(response);// { username: 'JavaScript', password: '123' }//when if get executed
// }catch(error){
//     console.log(error);
// }
// }

// consumePromiseFive()

// async function getAllUsersData(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//     const data = await response.json();//jo bhi response aa rha that is string use json bna do//string ko json me convert hone me time lagta h so await must be used 
//     console.log(data);
// }catch(error){
//     console.log("E:",error);
// }
// }
// getAllUsersData()


// deynable

// function 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))