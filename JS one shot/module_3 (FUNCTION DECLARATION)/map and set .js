// const studentIDs = new Array();
// studentIDs.push(1);
// studentIDs.push(1);
// studentIDs.push(3);
// studentIDs.push(5);
// console.log(studentIDs);

// const studentIDs = new Set();
// studentIDs.add(1);
// studentIDs.add(2);
// studentIDs.add(2);
// studentIDs.add(9);
// console.log(studentIDs);



const studentIDs = [1,2,3,4,4,4,4];
const uniquestudentIDs = new Set(studentIDs);
// console.log(uniquestudentIDs );
const newstudentIDs = [...uniquestudentIDs];
// console.log({newstudentIDs});



//list methods
//list.add()
//list.clear()
//list.delete()
//list.keys()

const newlist = new Set();
newlist.add(1);
newlist.add(2);
newlist.add(5);
newlist.add(3);
newlist.delete(1);
// newlist.clear();
console.log(newlist.values());


console.log(newlist);
console.log(newlist.has(5));

newlist.forEach((value)=>{
    console.log(value);
})





//here new map works same as the dictionary in other languages :)
const newMap = new Map();
newMap.set(10,"here is the 10th value :)");
newMap.set(45,"here is the 45th value :)");
console.log(newMap.get(10));
// console.log(newMap.delete(10));
console.log(newMap.size);

newMap.forEach((value)=>{
    console.log(value);
})
console.log(newMap.has(45));