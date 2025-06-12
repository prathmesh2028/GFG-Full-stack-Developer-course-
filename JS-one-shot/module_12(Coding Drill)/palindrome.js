//Palindroe String


// const str = "GEEG";

// const arrOfStr = str.split("");
// console.log(arrOfStr)
// const reverseOfStr = arrOfStr.reverse();
// const reverseStr = reverseOfStr.join("");
// console.log(reverseStr)
// console.log(reverseOfStr)



// if(str === reverseStr){
//     console.log("String is a palindrome")
// }
// else{
//     console.log("string is not a palindrome")
// }






//Another method
// const str = "MADAM";
// const reverseOfStr = str.split("").reverse().join("");
// if(str === reverseOfStr){
//     console.log("String is a palindrome")
// }
// else{
//     console.log("string is not a palindrome")
// }







//normal for loop

const str = "PRATHMESH";


function reverseStr(str){
    let reversedStr = "";
    for(let i=str.length-1 ; i>=0 ; i--){
        reversedStr+=str[i];
    }
    return reversedStr;
}


const reverseOfStr = reverseStr(str);
console.log(reverseOfStr)

if(str === reverseOfStr){
    console.log("String is a palindrome")
}
else{
    console.log("string is not a palindrome")
}

