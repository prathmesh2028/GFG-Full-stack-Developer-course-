//always write the queryslector at the top
let startBtn = document.querySelector(".start");
let countBtn = document.querySelector(".count");
let stopBtn = document.querySelector(".stop");
let value = 0;
// let startBtn = document.getElementById("btn-start");
// console.log(startBtn)

// let stopBtn = document.getElementById("btn-stop");
// console.log(stopBtn)

// let startBtn = document.getElementsByClassName




// let startBtn = document.querySelector(".start");
// console.log(startBtn)

// let resetBtn = document.querySelector("#btn-stop");
// console.log(resetBtn)


// let button = document.querySelectorAll(".button");
// console.log(button) //gives array
// console.log(button[0])
// console.log(button[1])
// console.log(button[2])





//example use of the eventlistener
// console.log(startBtn)
// startBtn.addEventListener("click",function (){
//     alert("button was clicked...!")
// })

function msg(){
    console.log("button is clicked...1");
};

// startBtn.addEventListener("click",() => {
//     console.log("Buton clicked..!");
// });

startBtn.addEventListener("click", ()=>{
    // startBtn.innerText = "Begin";
    if(startBtn.innerText === "start"){
        startBtn.innerHTML = "<span>Lets Begin</span>";
    }
    else{
        startBtn.innerText = "start"
    }
});




countBtn.addEventListener("click", ()=>{
    value++;
    console.log(value);
})





//when I click stop button color to red

stopBtn.addEventListener("click", ()=>{
    // stopBtn.classList.add("btn-red");
    stopBtn.classList.toggle("btn-red");
})




