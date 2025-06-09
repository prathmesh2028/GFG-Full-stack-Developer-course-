//copying an array ==> array references

// let arr1 = [1,2,3]; //refering to memory location - abc123;
// let arr2 = arr1; // same referring to memory as arr1
// console.log(arr1);
// //shallow copy


// arr2.push(4);
// console.log("updated arr2",arr2);



// //we push only in arr2 but it is being pushed in arr1 also
// console.log("updated arr1",arr1);

// //solution to avoid this

// //spread operator
// let arr3 = [...arr1];
// console.log(arr3);
// arr3.push(5);
// console.log(arr3);
// //updated arr1 is still the same as 1234
// console.log(arr1);

