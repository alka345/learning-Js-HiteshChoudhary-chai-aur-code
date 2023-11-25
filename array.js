//declaring an array
const arr1 =[0,1,2,3];
// const arr2 =["a","b","c"];
// const arr3 = new Array (0,1,2,3,4,5);
// console.log(arr1.push(8));//why returning 5:length of array.
// console.log(arr1);//while it return new array.
// console.log(arr2);
// console.log(arr3);
// console.log(arr1.pop());//it prints the ele to be removed.
// arr1.unshift(9);
// console.log(arr1);//white it retuens new array.//[9,0,1,2,3]
// arr1.shift();clear
// console.log(arr1);//white it retuens new array.[0,1,2,3]
// arr1.includes(0); console.log(arr1);//wrong
// console.log(arr1.includes(0));//white it returns new array.//
// arr1.includes(10);console.log(arr1);//wrong
// console.log(arr1.includes(10));//white it retuens new array.
// arr1.indexOf(19); console.log(arr1);//wrong.
// console.log(arr1.indexOf(19));//when ele not prst returns -1.
// arr1.indexOf(2); console.log(arr1);//wrong
// console.log(arr1.indexOf(3));

// const arr4 =arr1.join();//0,1,2,3 Not [0,1,2,3]
// console.log(arr4);//
// console.log(typeof arr4);//join() also changes dataType:String
// console.log(arr1.join());//Correct

// console.log("O",arr1);//[0,1,2,3]
// const arr5=arr1.slice(0,3);
// console.log("S",arr5);//[0,1,2]
// console.log("S-O",arr1);//[0,1,2,3]
// console.log("O",arr1);//[0,1,2,3]
// const arr6=arr1.splice(0,3);
// console.log("S",arr6);[0,1,2]
// console.log("S-O",arr1);[3]

// const heroes = ["Alka","Aliya","amrita"];
// const maleHeroes =['sid','ritik'];
// const arr7=
// heroes.push(maleHeroes);
// console.log(heroes);// ['Alka', 'Aliya', 'amrita', [ 'sid', 'ritik' ] ]
// console.log(arr7);//white it returns no of ele in array.//4
// console.log(heroes[3][0]);//sid

// const heroes = ["Alka","Aliya","amrita"];
// const maleHeroes =['sid','ritik'];
// const allHeroes =heroes.concat(maleHeroes);
// console.log(allHeroes);//[ 'Alka', 'Aliya', 'amrita', 'sid', 'ritik' ]

// heroes.concat(maleHeroes);//wrong
// console.log(heroes);//[ 'Alka', 'Aliya', 'amrita' ]

// const arr8 = [1,2,3,[4,5],7,[9,[6]]];
// console.log(arr8.flat(2));//[ 1, 2, 3, 4, 5, 7, 9, 6 ]
// console.log(arr8.flat(1))//[1, 2, 3, 4, 5, 7, 9, [ 6 ]]
// console.log(arr8.flat(Infinity));//


// console.log(Array.isArray("Alka"));//false
// console.log(Array.from("Alka"));//[ 'A', 'l', 'k', 'a' ]

// const score1=100;
// const score2=200;
// const score3=300;
// console.log(Array.of(score1,score2,score3));//[100,200,300]


console.log(Array.from({name:"Alka"}));//[]:confuse about what to convert as string among key or value.