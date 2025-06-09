//String Method - charAt & charCodeAt
//String Methods




//charAt method

let message = "I am Student at SInhgad College :)";
// console.log(message.length)
const index =  14;
const char = message.charAt(index)
//If we not pass any index to charAt then by default the index is 0 
//If index out of bound then it will give a empty string :)
// console.log(char);


//charCodeAt method
// character =====> ASCII code 
// ASCII (American Standard Code for Information Interchange)

const ASCIIcode = message.charCodeAt(index);
// console.log(`The ASCII code of "${char}" is ${ASCIIcode}`);




//Homework
// geeks ==> iffnu
// 1,0,2,1
// let string = "geeks";
//not a god way
// for(let i=0 ; i<string.length ; i++){
//     let charAt = string.charAt(i);
//     if(charAt === "g"){
//         string = string.replace("g","i");
//     }
//     else if (charAt === "e"){
//         string = string.replace("e" , "f");
//     }
//     else if (charAt === "k"){
//         string = string.replace("k" , "n");
//     }
//     else if(charAt === "s"){
//         string = string.replace("s","u");
//     }
// }
// console.log(`Here is your modified string....\n${string}`);

//iffnu 1,0,2,1
let result = "";
let string = "geeks";
for(let i=0 ; i<string.length ; i++){
    let code = string.charCodeAt(i);
    if(string[i] === "g"){
        result += String.fromCharCode(code+2)
    }
    else if (string[i] === "e"){
        result += String.fromCharCode(code+1)
    }
    else if(string[i] === "k"){
        result += String.fromCharCode(code+3)
    }
    else if(string[i] === "s"){
        result += String.fromCharCode(code+2)
    }
    else{
        result+=string[i];
    }
}

console.log(result);