/**
 * New keyword and constructor functions
 * constructor functions technically are regular
 * functions. They have 2 convention though
 * they are named with the capital letter first .
 * They should be executed with the "new" operator.
 * 
 */


function User(name,age){
    (this.name = name) , (this.age = age);
    
}
const user1 = new User();
console.log(user1.name);


const user2 = new User("Prathmesh",18);
const user3 = new User("Sakshi",17);


console.log(user2)
console.log(user3)


const user4 = new User('Prakash', 101);
const user5 = new User('Ashish', 25);
const user6 = new User('Ria', 99);
const user7 = new User('Sagar', 100);

console.log(user4); // Output: User { name: 'Prakash', age: 101 }
console.log(user5); // Output: User { name: 'Ashish', age: 25 }
console.log(user6); // Output: User { name: 'Ria', age: 99 }
console.log(user7); // Output: User { name: 'Sagar', age: 100 }






// The this keyword inside a constructor function refers to the newly created object. 
// This is why we use this to assign properties to the object.

function User(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

const user8 = new User('Prakash', 101);
// Output: User { name: 'Prakash', age: 101 }