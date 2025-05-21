//Function as a property


const obj = {
    name: "prathmesh h badhe",
    greetingmesage: function (){
        console.log(`Hello Mr.PRATHMESH H BADHE i.e `);
    },
    bye(){
        console.log("BYEEEEEEEEEEEEEEEEEEE")
    }
}

// console.log(obj);
// console.log(obj.greetingmesage) still function

obj.greetingmesage();
obj.bye();