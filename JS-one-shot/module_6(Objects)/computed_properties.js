//adding property an object
// computed property


const rls = require("readline-sync");
const key = rls.question("What do you want to ask to the mentor :");
const courses = rls.question("Which course want to learn [HTML,CSS,JS] :")
const obj = {
    name: "PRATHMESH HANUMANT BADHE",
    age: 18,
    [courses]: "course not available"
};

obj.city = "PUNE";
obj.state = "MAHARASHTRA";


console.log(obj[key])
console.log(obj[courses]);