//class is just a blueprint for the objects

class User{
    constructor(name, role, isAdmin , isLoggedIn){
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }


    displayInfo(){
        console.log(`${this.name} is a ${this.role}`)
    }



}

const user1 = new User("Prathmesh","full stack","yes","yes");
console.log(user1)
user1.displayInfo()