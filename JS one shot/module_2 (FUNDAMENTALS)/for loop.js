/**heyy
 * here is 
 * the for 
 * loop
 * :)
 * 
 */


//table of 8 :)
// const num = 8 ;
// for (let i = 1 ; i<= 10 ; i++){
//     console.log(`${num} X ${i} = ${num*i}`);
// }

//tables from 1 to 10 :)

// for(let i = 1 ; i<=10 ; i++){
//     for(let j = 1 ; j<= 10 ; j++){
//         console.log(`${i}  X  ${j} = ${i*j}`);
//     }
//     console.log("................................................................................");
// }




//square pattern of star
// const num = 5 ;
// const pat = " * " ; 
// for (let i=1 ; i<= num ; i++){
    
//         console.log(pat.repeat(num));
    
    
// }
// console.log("end of the code :)");




//triangle pattern here
// const symbol = "* " ;
// for(let i = 1 ; i<= 5 ; i++){
//     console.log(symbol.repeat(i));
// }
// for(let i = 4 ; i>=1 ; i--){
//     console.log(symbol.repeat(i));
// }
// console.log("end of the code...!");





//findig the number of the characters in the string without using the .length operator :)
// let str = "PRATHMESH HANUMANT BADHE";
// let len = 0 ;
// for (let i=0 ; i<str.length ; i++){
//     len++;
// }
// console.log(`number of characters in the string is ${len}`);



// given ranges of nubers to find all the even numbers
// for(let i=1; i<101 ; i++){
//     if(i % 2 === 0){
//         console.log(`this is the even number ${i}`);
//     }
//     else{
//         console.log(`is the odd number ${i}`)
//     }
// }






const inputstring = "Hello, I like GFG" ;
const vovels = "aeiou" ;

for(let i=0 ; i<inputstring.length ; i++){
    if(vovels.includes(inputstring[i])){
        console.log(`Vovel in the string is ${inputstring[i]}`);
    }
    else{
        console.log(`this is not a vovel ${inputstring[i]}`);
    }
}