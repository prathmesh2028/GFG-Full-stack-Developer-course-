


// promise.catch(errMessage=>console.log("errMessage"));

// console.log("first");
// console.log("second");
// console.log("third");

//async await work in pairs
// works only with promises not timeout


const promise = new Promise((resolve,reject)=>{
    resolve("data from promise 123");
});

// //promsie.then

// const fn = async()=>{
//     console.log("first");
//     const data = await promise ; 
//     console.log(data);
//     console.log("second");
//     console.log("third");
// };
// fn();



const networkReqAsynFn = async ()=>{
    const unserData = await fetch(url);
    console.log(userdata);
    const humanreadableData = await userData.json();
    console.log(humanreadableData);
    const[firstUser] = humanreadableData;
    console.log(firstUser);
}
networkReqAsynFn();




//Error handling
// try{
//     null.name;
// }catch(error){
//     console.log("eror here",error);
// };
// console.log("ABCD");
// console.log("ABCD");