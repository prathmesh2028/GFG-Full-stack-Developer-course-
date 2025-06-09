class Children {
    constructor (name , age,id){
        this.name = name;
        this.age = age;
        this.id = Children.id++;
    }
    static sortByAge(a,b){
        return a.age - b.age
    }



}



const child1 = new Children("ram",11);
const child2 = new Children("sam",41);
const child3 = new Children("kam",61);



let arr = [child1 , child2 , child3];
// console.log(arr.sort((a,b) => a.age - b.age ));
console.log(arr.sort(Children.sortByAge));

