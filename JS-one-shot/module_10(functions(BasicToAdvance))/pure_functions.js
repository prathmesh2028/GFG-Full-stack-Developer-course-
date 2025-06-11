//Pure functions here 
/**
 * 1.It takes an arguement
 * 2.It should return something
 * 3.Result should not be influenced by the outer parameter
 * 4.It should not mutate the orignal arguement
 * 
 */

// function doubleValue(number){
//     return number*2;
// }

// const result = doubleValue(5);
// console.log(result)



//still impure function
// function appendnumbers(arr){
//     arr.push(10,100);
//     return arr;
// }

// const result = appendnumbers([1,2,3,4,5,6]);
// console.log(result)


//pure function
function appendnumbers(arr){
    let number = [];
    number.push(...arr,5,6);
    return number;
}

const result = appendnumbers([1,2,3,4,5,6]);
console.log(result)