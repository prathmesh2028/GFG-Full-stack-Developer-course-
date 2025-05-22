//This keyword

const obj = {
    name: "Prathmesh",
    displayMessage: function () {
        // console.log(this); will give this object whole as it is
        console.log("Hello " + this.name); //also called as the 
                                           //implicit binding (generally asked in the interview)

    }
}

// obj.displayMessage();
// console.log(obj);



function calculateSum () {
    console.log(this);
}

// calculateSum();




//o/p
/**
 * <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
 */


// console.log(this);



const user1 = {
    name: "Prathmesh Badhe",
    showName: function() {
        console.log(this.name);
    }
}


const user2 = {
    name: "Tanmay Patil",
    showName: function() {
        console.log(this.name);
    }
}


const user3 = {
    name: "Priyal Sathe",
    showName: function() {
        console.log(this.name);
    }
}

user1.showName();
user2.showName();
user3.showName();



//arrow function does not point to the object

//for user4
const user4 = {
    name: "Prakash",
    showName: () => {
        console.log(this);
    }
};

//user1.showName()
const displayName = () => {
    console.log(this);
}
displayName();   //refrers to the window object
// if printed we get the window object



const user5 = {
    name: "Pranay",
    showname: function (name) {
        console.log("Here-----/",this.name);
        function showMessage() {
            console.log(this.name);
        }
        showMessage();
    }
}

user5.showname();



//this in a object always refer to that object
/**
 * if this is uded insid the object ka function
 * ka function
 * still it will refer to the global (window)
 */
//  this in an arrow function refers to the surrounding (global) scope, not the obj object.




/**
 * Solution: Using self or that
A common workaround is to store this in a variable (often named self or that) that the inner function can access:
 */






const objq = {
    name: "Prakash",
    showName: function() {
        const self = this;
        function display() {
            console.log(self.name);
        }
        display();
    }
};

objq.showName(); // Logs "Prakash"

// Here, self refers to obj, so self.name correctly logs "Prakash".

/**
 * In Methods: this refers to the object executing the method.
In Regular Functions: this refers to the global object (window in browsers).
In Arrow Functions: this is inherited from the surrounding scope.
In Nested Functions: this can refer to the global object unless explicitly bound to the outer context using self.
Understanding this is crucial for mastering JavaScript,
 as it affects how functions and objects interact with each other.
  In the next lesson, we'll explore how to explicitly set the value of this using call,
   apply, and bind. See you there!
 */