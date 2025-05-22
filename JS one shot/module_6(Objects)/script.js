const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = deepCopy(person1); // Custom deep copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish