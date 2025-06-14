/**
 * Average Age of family members
 */

const familyMembers = [
    {
        name: "Prathmesh",
        age: 18
    },
    {
        name: "Sakshi",
        age: 17
    },
    {
        name: "Jijabai",
        age: 70
    },
    {
        name: "Hanumant",
        age: 46
    },
    {
        name: "Rupali",
        age: 35
    }
];

//not a good way
const agearr = familyMembers.filter(member => member.age).map(member => member.age);
console.log(agearr)
let sum = 0;
for(let age of agearr){
    sum+=age;
}
const result = sum / (agearr.length)
console.log(result)





//good way here
const totalAge = familyMembers.reduce((acc,curr) => acc + curr.age ,0);
const result = totalAge / (familyMembers.length)
console.log(result)
