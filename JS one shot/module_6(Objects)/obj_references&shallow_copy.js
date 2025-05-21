// object references and the shallow copy





const person1 = {
    name: "prathmesh",
    age: 18,
    address: {
        city: "PUNE",
        state: "MAHARASHTRA"
    }
}
// console.log(person1);

const person2 = person1 ;      
/**This
 * is generally 
 * called as
 * the
 * shallow copy
 */



// console.log(person2);

const person3 = Object.assign({},person1);  //kid of slallow copy still (deep) copy
// console.log(person3);
person3.age = 1000000;
// console.log(person3)
// console.log(person1) //no change in orignal person1
person3.name = "ASHISH";
person3.address.city = "MUMBAI";   //does not work generally
// for nested object not works :()
console.log(person3);
console.log(person1);
// person1.age = 100;
// person2.name = "PRAKASH";
// console.log(person2);


// console.log(person1);



/**to avoid this 
 * we do the deep copy
 */



