// encodd characters

/**
 * GENERATE THE SECRET CODE FROM A GIVEN STRING
 * INPUT - PRATHMESH
 * INCODE BY CHARS ---> 2
 * OUTPUT - RTCVJOGUJ
 */

const inputStr = "PRATHMESH";

// inputStr.
//n takes the number like 2,3,4,1,-2,-5,etc 
let StrEncoding = (str , n) => {
    let outputStr = "";
    for(let i = 0 ; i < str.length ; i++){
        const chCode = str.charCodeAt(i)
        let newchCode = chCode + n ;
        const char = String.fromCharCode(newchCode) ;
        outputStr += char;
    }
    return outputStr;
}


console.log(StrEncoding(inputStr , 0));
