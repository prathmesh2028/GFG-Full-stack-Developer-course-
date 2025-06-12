/**
 * Map - Filter
 */


/**
 * map and filter are examples of higher-order functions — but they are not the only ones.
Any function that takes or returns a function is a higher-order function.
 */


const arr = [1,2,3,4];
function squareOfNumber(arr){
    const tempArr = [];
    for(let number of arr){
        tempArr.push(number*number);
    }
    return tempArr;
}



const result = squareOfNumber(arr);
console.log(result);




//MAP method here

const output = arr.map(getSqr);
function getSqr(num){
    return num*num;
}
console.log(typeof output);





const SQRNUM = arr.map((num)=> (num**2) );
console.log(SQRNUM);