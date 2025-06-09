//object methods

const obj = {
    name: "Prathmesh Badhe",
    age: 99,
    city: "Pune"
}

const entries = Object.entries(obj);
console.log(entries); //array o/p
//gives the array of key value pairs
//like given below
//[ [ 'name', 'Prathmesh Badhe' ], [ 'age', 99 ], [ 'city', 'Pune' ] ]

const keys = Object.keys(obj);
console.log(keys); // gives the array of keys

const values = Object.values(obj);
console.log(values);  // gives the array of all values of abj












const obj1 = {
    x:1,
    y:2,
    z:17
}

const values1 = Object.values(obj1);
console.log(values1);
