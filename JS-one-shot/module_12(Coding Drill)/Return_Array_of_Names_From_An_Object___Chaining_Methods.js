/**
 * Create an array of names of senior employees
 */


const employees = [
    {
        name: "Prathmesh",
        numOfYears: 5
    },

    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 10
    }
]

let arra = [];
for(let employee of employees){
    arra.push(employee["name"])
}
console.log(arra)





//using filter

let arr = [];
let newArr = employees.filter(employees => employees["numOfYears"] > 3)
console.log(newArr)
for(let employee of newArr){
    arr.push(employee.name)
}
console.log(arr)





//new very effective and very good method is here

let result = employees.filter(employee => employee.numOfYears > 3).map(employee => employee.name);
console.log(result)


//this is very effective way I will recommend go with this way only
