class User{
    #id = 123;
    changeID(id){
        this.#id = id
    }
}

const user = new User();
user.changeID("qwerty")
console.log(user)