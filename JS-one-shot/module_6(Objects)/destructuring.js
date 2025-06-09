//destructuring
// generally to do the unpacking


let obj = {
    name: "prathmesh",
    address: {
        state: "MAHARASHTRA",
        city: "PUNE",
        locality: "sinhgad college"
    },
    courses: ["HTML","CSS","JS"]
}


// let {address} = obj;
// console.log(address);


// let {name, ...rest} = obj;
// console.log(name);
// console.log(rest);



// let {name:username, address: useraddress} = obj;
// console.log(name); //gives error name is not defined ;
// console.log(username);
// console.log(address);  //gives error name
// console.log(useraddress);


// let {address: {city}} = obj ;
// console.log(city);

// let {name, address: {state , city , locality} , courses} = obj;
// console.log(courses);



// let {name, address: {city} , courses} = obj;
// console.log(city);






const employees = {
    engineer: {
        emp1: {
            id: 1,
            name: "Prathmesh hanumant badhe",
            occupation: "full-stack"
        },
        emp2: {
            id: 2,
            name: "Tanmay Prafulla Patil",
            occupation: "Android developer"
        }
        
    },
    placement: {
        emp3: {
            id: 3,
            name: "Priyal Sathe",
            occupation: "Sr. Executive"
        }
    },
    youtube: {
        emp4: {
            id: 4,
            name: "Jay pardeshi",
            occupation: "Youtube branch manager"
        }
    }
}


// let {engineer: {emp2: {name, occupation}}} = employees ; 
// console.log(name, occupation);


let {youtube: {emp4: {name , occupation}}} = employees;
console.log(name, occupation);