let input = document.querySelector(".input");


// input.addEventListener("change",()=>{
//     console.log(input.value)
// });



// input.addEventListener("input",()=>{
//     console.log(input.value);
// })




// input.addEventListener("focus",()=>{
//     console.log(input.value);
// })






//Mouse events

document.body.addEventListener("mousedown", (event)=>{
    let  xcor = event.clientX;
    let  ycor = event.clientY;
    let cors = `x cor : ${xcor} , y cor : ${ycor}`;
    console.log(cors);
});


// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button);
// });




// input.addEventListener("mousedown",(event)=>{
//     let  xcor = event.pageX;
//     let  ycor = event.pageY;
//     let cors = `x cor : ${xcor} , y cor : ${ycor}`;
//     console.log(cors);
// })