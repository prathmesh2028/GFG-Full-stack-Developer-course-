/**Includes
 * array.includes(any)
 */

const availablesize = ["S","M","L","XL","XML","XXXL"];
const rls = require("readline-sync");
const usersize = rls.question(`Enter your size \navailable sizes are ${availablesize}`);


const is_size_available = availablesize.includes(usersize);
// console.log(is_size_available);
if(is_size_available){
    console.log("Size is available in the store ");
}
else{
    console.log("Unavailable size :(");
}