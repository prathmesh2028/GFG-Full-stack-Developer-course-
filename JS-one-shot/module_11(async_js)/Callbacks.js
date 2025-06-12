// Callback Functions

function a(wrapper){
    console.log("Hello");
    wrapper();
};

function b(){
    console.log("Byee");
}

// a(b);


const btn = document.getElementById("btn")

// setTimeout(function callback(){
//     console.log("exxecuted after a delay");
// }, 3000)



fetch("https://.........")
    .then(function(){
        //Responce logic
    })


btn.addEventListener("click" , function (){
    console.log("clicked...!")
})




// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .catch(error => console.error(error));