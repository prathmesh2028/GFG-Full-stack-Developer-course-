const message = "I am PRATHMESH HANUMANT BADHE";
// console.log(message.toLowerCase());
// console.log(message);
// console.log(message.toUpperCase())
const vovels = "aeiou";
let flag = false;

for(let char of message){
    if(vovels.includes(char.toLowerCase())){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag){
    console.log("string has vovels");
}
else{
    console.log("String does not have vovels");
}