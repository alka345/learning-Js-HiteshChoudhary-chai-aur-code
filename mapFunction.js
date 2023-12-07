const myNums =[1,2,3,4,5,6,7,8,9]
// const newNum = myNums.map((num)=>num+10)//map() automatically returns function
// console.log(newNum);//[
    // 11, 12, 13, 14, 15,
    // 16, 17, 18, 19     
//   ]

// myNums.forEach((item)=>
    // {console.log(item+10)}//result not in form of array.
// )

// +++++++++++++++++++++++++++++++++++++++++++++++++Chaining++++++++++++++++++++++++++++++++++++++++++++++
// const newNum= myNums
//               .map((num)=>num*10)//[10,20,30,40,50,60,70,80,90]
//               .map((num)=>num+1)
// console.log(newNum);//[11,21,31,41,51,61,71,81,91]

const newNum= myNums
              .map((num)=>num*10)//[10,20,30,40,50,60,70,80,90]
              .map((num)=>num+1)//11,21,31,41,51,61,71,81,91]
              .filter((num)=>num>=40)//[ 41, 51, 61, 71, 81, 91 ]
console.log(newNum);