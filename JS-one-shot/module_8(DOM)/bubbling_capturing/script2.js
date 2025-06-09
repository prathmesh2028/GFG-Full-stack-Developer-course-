//event building and capturing



let form = document.querySelector("#form");
let div = document.querySelector("#div");
let p = document.querySelector("#p");



//bubbling
//like going the outerside of it

p.addEventListener("click",()=>{
    alert("Para clicked LOL");
});


div.addEventListener("click",()=>{
    alert("div clicked LOL");
});



form.addEventListener("click",()=>{
    alert("form clicked LOL");
});



//capturing
// it is like coming inside from the outside

p.addEventListener("click",()=>{
    alert("Para clicked LOL");
},true);


div.addEventListener("click",()=>{
    alert("div clicked LOL");
},true);



form.addEventListener("click",()=>{
    alert("form clicked LOL");
},true);




