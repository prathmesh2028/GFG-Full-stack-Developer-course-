
const user1 = {
    name: "Prathmesh",
    age: 18,
    // sayHi() {
    //     console.log(this.name);
    // }
}
const user2 = {
    name: "Tanmay",
    age: 10,
    // sayHi() {
    //     console.log(this.name);
    // }
}
const user3 = {
    name: "Priyal",
    age: 17,
    // sayHi() {
    //     console.log(this.name);
    // }
}
//her eyou can see that sayHi() is written evey object and this shoudl not be done in the programmers 
// To optimize this thewy did......


//inplicit binding here
function sayHi(){
    console.log(this.name);
}
// The call method allows us to borrow a function and 
// execute it with a specified this value and arguments. 
// Here's how it works:

sayHi.call(user1); // Output: Prathmesh
sayHi.call(user2); // Output: Tanmay
sayHi.call(user3); // Output: Priyal
// sayHi.call(user1);


// The call method immediately invokes the function 
// with the this value set to the specified object.






//function borrowing in the javascript







// call , apply, bind are the method of function not of object

// Using Apply
// The apply method works similarly to call, but it takes an array of arguments 
// instead of individual arguments.
//  This can be particularly useful when you have an array of arguments to pass.

function introduce(degree, year) {
    console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}

introduce.apply(user1, ['B.Tech ECE', 2015]); // Output: Prakash, Degree: B.Tech ECE, Year: 2015
introduce.apply(user2, ['B.Tech CS', 2018]); // Output: Ashish, Degree: B.Tech CS, Year: 2018



function sayHi(degree , year){
    console.log(this.name, degree , year);
}
//explict binding here


// user1.sayHi(); will give error as listed below
// TypeError: user1.sayHi is not a function
sayHi.call(user1, "B-Tech" , 2028); //value of this is user1
sayHi.call(user2 , "Mech" , "2024"); //same here
sayHi.call(user3, "Biotech" , "2020"); // same here
//this refer to the object calling the function



// sayHi.apply(user1);
// sayHi.apply(user2); //all will give name
// sayHi.apply(user3); // then undefined undefined




sayHi.apply(user1, ["BE", "2016"]);









// Call: Immediately invokes the function with a specified this value and arguments.
// Apply: Immediately invokes the function with a specified this value and arguments 
// passed as an array.