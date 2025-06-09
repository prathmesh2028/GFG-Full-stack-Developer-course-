//ARRAYS IS THE NON PRIMITIVE DATA TYPE
//array is the non primitice datatype

let students = ["prathmesh","tanmay","shivani",["HTML","CSS","JS"],"priyal","kirti",["HTML","CSS","JS"],1,2,3,4,5,6,7,8,9];
// console.log(students);

students = ["prathmesh",{schoolName: "Sinhgad College"},"tanmay","shivani","priyal","PUBG","kirti"];

// for(let i=0 ; i<students.length ; i++){
//     console.log(students[i]);
// }



//FOR LET OF

for(let name of students){
    console.log(name);
} //will give all the elements of the array

// for let in 

for(let name in students){
    console.log(name);
}
//gives out the indexes




for(let index in students){
    console.log(students[index]);
}