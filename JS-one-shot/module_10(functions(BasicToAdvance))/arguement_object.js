/**
 * Arguement Object is non arrow function
 * Arguement Object is an array like object present locally inside a function
 * and it contains value of all the arguements passed to a function
 * 
 */


// function calculateTotal(a,b){
//     // return a  +  b  ;
//     arguments[3] = 0;
//     console.log(arguments[3]);
//     console.log(arguments);
// };

// calculateTotal(4,7,2,3,4,5,6);



// function calculateTotal(a,b){
    // let sum = 0;
    // console.log(arguments.length)
    // for(let value of arguments){
    //     console.log(value);
    //     sum+=value;
    // }
    // console.log(sum)


//     const arr = [...arguments];
//     console.log(arguments)
//     console.log(arr)
// };

// calculateTotal(4,7,2,3,4,5,6);







function calculateTotal(a=10){
    a=100;
    console.log(a);
    console.log(arguments);
    arguments[0] = 9;
    console.log(arguments);
    console.log(a) //value of a do not changes
}
calculateTotal();