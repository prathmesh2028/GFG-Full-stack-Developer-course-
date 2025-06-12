/**
 * REST parameter |
 *                |
 *                v
 *              ...rest / ...args
 * 
 */


function calculateTotal(a,b, ...args){
    console.log(a,b);
    console.log(args);
}

calculateTotal(1,2,3,4,5,6,7,8,9);



//function for sm of all the arguements passed over the function

function Sum(...rest){
    let sum = 0;
    for(let number of rest){
        sum+=number;
    }
    return sum;
};

console.log(Sum(1,2,3,4,5,6,7,8,9,10));