// property existance


const obj = {
    name: "prathmesh",
    city: "pune"
}

const isPropertyFound = "city" in obj; //boolean (true or false)
console.log(isPropertyFound);


for(let key in obj){
    console.log(key, obj[key]);
}