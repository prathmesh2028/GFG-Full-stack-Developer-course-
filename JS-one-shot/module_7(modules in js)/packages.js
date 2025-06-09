function hello(name){
    console.log(`hello Mr. ${name}`);
    console.log(`how are you mr${name}`);
}
function sum(a,b,c){
    const result = a+b+c;
    console.log(`so your output here is as here ${result}`)
}
function greet(a="hello"){
    console.log(`hello dear jii ${a}`);
}


// module.exports = {
//     greet,
//     hello,
//     sum,
// }









// or






export default{
    hello,
    greet,
    sum,
};