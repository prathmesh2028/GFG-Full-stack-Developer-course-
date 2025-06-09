let btnContainer = document.querySelector("#btn-container");


btnContainer.addEventListener("click",(event)=>{
    let btnText = event.target.innerText;
    if(btnText === "red"){
        event.target.classList.toggle("btn-red")
    }
});
