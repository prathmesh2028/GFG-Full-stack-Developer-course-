//Binding
const user1 = {
    name: "Prathmesh",
    age: 18,
    displayMessage() {
        console.log(this.name);
    }
};

user1.displayMessage();    //imlpicit binding
const user2 = {
    name: "Tanmay",
    age: 10,
}
const user3 = {
    name: "Priyal",
    age: 17,
}



// function sayHi (){
//     console.log(this.name);
// }


function sayHi (degree , year){
    console.log(this.name,degree , year);
}
                             //explicit binding

// const result = sayHi.bind(user3 , "BEE",2023);
// result(); 

//or

const result = sayHi.bind(user3 , "BEE");
result(2023);
