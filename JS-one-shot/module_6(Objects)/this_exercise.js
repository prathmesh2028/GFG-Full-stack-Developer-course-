//this exercise


// function displayName() {
//     console.log(this);
// }


// const user1 = {
//     name: "Prathmesh",
//     displayName,
// };
// console.log(user1);
// user1.displayName();
// { name: 'Prathmesh', displayName: [Function: displayName] }




const user1 = {
    name: "Prathmesh",
    // showName: displayName,
};

// user1.showName();














// function displayName() {
//     console.log(this);
// }

const user2 = {
    name: "Priyal",
    // showName: function() {
    //     displayName();
    // },
};

// user2.showName();
//this inside a function not called by the object hence the window scope







const displayName = () => {
    console.log(this);
}


const user3 = {
    name: "Saniya",
};

displayName.apply(user3);
















