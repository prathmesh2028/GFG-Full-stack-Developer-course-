//Filter is also a higher order function 
// and many such mre are there liek map and filter :)



//FILTER
//everything name suggests no need to say anything

const arr = [1,2,3,4,5,6,7,8,9,10];

// function filterNumbers(arr){
//     const tempArr = [];
//     for(let num of arr){
//         if(num % 2 === 0){
//             tempArr.push(num)
//         }
//     }
//     return tempArr;
// };
// const output = filterNumbers(arr);
// console.log(output);


// no need to write code all above like above just do as given below

const output = arr.filter(num => num%2!==0);
console.log(output);