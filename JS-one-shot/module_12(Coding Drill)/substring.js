/**
 * SUBSTRING
 * 
 * i.e finding the all possible substring of a given string
 */
  
let Str = "PRATHMESH";
for(let i = 0 ;i < Str.length ; i++){
    for(let j = i +1 ; j < Str.length ; j++){
        console.log(Str.slice(i , j))
    }
    
    
}