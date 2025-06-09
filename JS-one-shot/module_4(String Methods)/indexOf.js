const message = "I am Mr. PRATHMESH HANUMANT BADHE";
// console.log(message.indexOf("X"));
//-1 for character which does not exists int eh string


// function findchar(text,char){
//     const index = text.indexOf(char);
//     if(index === -1){
//         return "character not found...!"
//     }
//     else{
//         return "character founded....!"
//     }
// }



//arrow function here
const findchar = (text,char) => text.indexOf(char) === -1 ? "character not found....!" : "character founded...!";
const result = findchar("I am Mr. PRATHMESH HANUMAMNT BADHE" , 'I');
console.log(result);