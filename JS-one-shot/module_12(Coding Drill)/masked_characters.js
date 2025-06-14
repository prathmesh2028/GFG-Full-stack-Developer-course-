


const str = "1234567890";

//changing the last 4 characters of the string by '@'

const masked = '@'.repeat(4);
const result = str.slice(0,str.length-4) + masked;
console.log(result)




//using for loop and function

function masking_Char(string , n){
    let output = "";
    for(let i = 0 ; i < string.length ; i++){
        if(i >= string.length - n){
        output+='@';
     }
        else{
            output+=string[i];
        }
    }
    return output;
}

console.log(masking_Char(str , 4));