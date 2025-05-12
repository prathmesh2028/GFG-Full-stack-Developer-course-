//try catch
const username = "PRATHMESH";
try{
    console.log(myname);
}catch(error){
    console.log("Error occured..>!");
    console.log(error.name,error.message);
    // console.log(error.stack);
}
finally{
    console.log("finally executed...!");
}
console.log(username);