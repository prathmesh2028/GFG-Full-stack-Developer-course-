//optional chaining
//generally the use of the "?."


const user = {
    name: "prathemsh",
    age: 18,
    address: {
        street: "Street no.42",
        city: "PUNE",
        taluka: "Haveli",
        college: "Sinhgad College of Engineering, Pune"
    },
    likes: "Eat , sleep , play , dance code , etc",
    getDisplayMessage: function () {
        console.log("welcome mr prathmesh badhe")
    }
}

// console.log(user.address.college);
// console.log(user.hobby); // it gives undefined
// console.log(user.address.landmark); //undefined
// console.log(user.address.city); if address is commented
// gives type error if it is not present
// like this
// TypeError: Cannot read properties of undefined (reading 'city')



//solution 1
if(user.address !== undefined){
    console.log(user.address.city);
}
else{
    console.log("address not found...!");
}


//soluton 2
//optional chaining

console.log(user.address?.city);
//gives out the undefined if the address is not founded in the object
user.getDisplayMessage();

console.log(user.getDisplayAddress?.());


// console.log(user.hobbies?.); no need to do this
// it is already undefined