/**
 * WAP to delete all the vovels from a string
 */


let message = "Hello World , my name is PRATHMESH HANUMANT BADHE";
message = message.toLowerCase()
function delVovelsFromStr(str){
    const vovels = ['a','e','i','o','u'];
    let output = "";
    for(let char of str){
       if (!vovels.includes(char)){
        output+=""
       }
       
    }
    return output;
}


console.log(delVovelsFromStr(message));