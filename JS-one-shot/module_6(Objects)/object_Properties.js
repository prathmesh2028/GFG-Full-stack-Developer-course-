//Objects {key:value}
//we get responce from API as in form of the objects


const obj = {} ; //object literal


//adding value is known as property


const employee = {
    name: "PRATHMESH",
    age: 18,
    job: "Full stack developer",
    1: "one",
    courses: ["HTML","CSS","JS"],
    "is admin": "true"
}

//accessing them
console.log(employee.age);
console.log(employee.courses);

console.log(employee["job"]);
console.log(employee["is admin"])

