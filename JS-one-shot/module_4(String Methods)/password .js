// const rls = require("readline-sync");
// let password = rls.question("Enter your password here :");

// const alpha = "abcdefghijklmnopqrstuvwxtz";
// const num = "1234567890";
// const special = "!@#$%^&*()_+-";

// for(let char of alpha){
//     if(password.includes(char)){
//         console.log("Good password has alpha character...!");
//         break;
//     }
//     else{
//         password = rls.question("Password must include at  leats one alpha character :");
//         continue;
//     }
// }


// for(let char of num){
//     if(password.includes(char)){
//         console.log("Good password has num character...!");
//         break;
//     }
//     else{
//         password = rls.question("Password must include at  leats one num character :");
//         continue;
//     }
// }

// for(let char of special){
//     if(password.includes(char)){
//         console.log("Good password has special character...!");
//         break;
//     }
//     else{
//         password = rls.question("Password must include at  leats one special character :");
//         continue;
//     }
// }
















const rls = require("readline-sync");

const alpha = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const special = "!@#$%^&*()_+-";

let password = rls.question("Enter your password here: ");

while (true) {
    if (!alpha.split('').some(char => password.includes(char))) {
        password = rls.question("❌ Password must include at least one alphabet character: ");
        continue;
    }

    if (!num.split('').some(char => password.includes(char))) {
        password = rls.question("❌ Password must include at least one numeric character: ");
        continue;
    }

    if (!special.split('').some(char => password.includes(char))) {
        password = rls.question("❌ Password must include at least one special character: ");
        continue;
    }

    // All conditions passed
    console.log("✅ Password accepted!");
    break;
}


