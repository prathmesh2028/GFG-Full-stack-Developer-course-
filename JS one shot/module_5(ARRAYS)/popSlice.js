//pop
//slice
//splice

let courses = ["HTML","CSS","JS","reactJS","Blockchain"];
// console.log(courses);

// for(let i=0 ; i<courses.length+3 ; i++){
//     courses.pop();
//     console.log(courses);
// }

//slice will return a shallow copy
let value = courses.slice(3,4);
// console.log(value);
// console.log(typeof(value));
// console.log(typeof(courses));

let name = "prathmesh";

let firstuppercase = name[0].toUpperCase();
let capitalisename = firstuppercase + name.slice(1);
// console.log(capitalisename);

let languages = ["JS","PYTHON","JAVA","Go"];
// languages.splice(2,1);
console.log(languages);



//to add an element in the array
//array of languages
languages.splice(2,0,"ReactJS");
console.log(languages);