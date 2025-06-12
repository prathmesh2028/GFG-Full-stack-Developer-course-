//recursive simple example for the facorial of a number

// import readlineSync from 'readline-sync';

// const number = readlineSync.question("Enter the number here :");

// function factorial(n){
//     if (n === 1 || n === 0){
//         return n;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// };
// const output = factorial(number);
// console.log(output);




//recurssion is a programming term
// where the function is called from itself







//normal function for the addition
function calculateSum(number){
    let sum = 0;
    for(let i=1 ; i<=number ; i++){
        sum+=i;
    }
    return sum;
}

const result = calculateSum(10);
console.log(result);





//recurssive function here


function sumRecurssive(number){
    if (number === 0 || number === 1){
        return number;
    }
    else{
        return number + sumRecurssive(number-1);
    }
};

const output = sumRecurssive(100);
console.log(output);



// recurssive funciton for the powers of x and y

function power(x,y){
    if(y === 0 ){
        return 1;
    }
    else if (y === 1){
        return x;
    }
    
    else{
        return x * power(x,y-1);
    }
}

const powerOF = power(2,5);
console.log(powerOF);













