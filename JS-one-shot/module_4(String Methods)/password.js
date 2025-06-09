//condition for entering the password
const rls = require("readline-sync");
let password = rls.question("Enter your strong passsword here :");

const special = "!@#$%^&*()_-";
const numbers = "1234567890";
const alpha = "abcdefghijklmnopqrstuvwxyz";




// while(true){
//     if(special.test(password) && numbers.test(password) && alpha.test(password)){
//         console.log("Password accepted...!");
//         console.log(`here is your password ${password}`);
//         break;
//     }
//     else{
//         console.log('Password incorrect...!\nPassword must include at leats one lowercase character , one special character and a numbere :');
//         password = rls.question("Kindly enter your password here again :");
//     }
// }
// console.log(password);

let flag = false;
for(let char of numbers){
    
    if(password.includes(char)){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag === true){
    console.log("Password includes numbers...")
}
else{
    console.log("error in password\nKindly enter at least single number");
    password = rls.question("Enter password again..! :");
}




for(let char of special){
    let flag = false;
    if(password.includes(char)){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag === true){
    console.log("Password includes special...")
}
else{
    console.log("error in password\nKindly enter at least single special");
    password = rls.question("Enter password again..! :");
}


for(let char of alpha){
    let flag = false;
    if(password.includes(char)){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag === true){
    console.log("Password includes alpha...")
}
else{
    console.log("error in password\nKindly enter at least singlealpha");
    password = rls.question("Enter password again..! :");
}













