//prototype
const loggedInStatus = {
    isLoggedIn: true
}

const admin = {
    isAdmin : true,
    __proto__:loggedInStatus,
    showMEssage(){
        console.log("User is a admin ")
    }
};

const user = {
    name:"prathmesh",
    role: "Full stack developer",
    add:{
        city:"Pune",
        pin:411041
    },
    __proto__:admin,
};


console.log(user)
console.log(user.toString())
console.log(user.isAdmin)
console.log(user.isLoggedIn)


user.showMEssage()

console.log(Object.keys(user))  //no prototype keys shown


for(let key in user){
    console.log(key)    //here gets all the keys
}