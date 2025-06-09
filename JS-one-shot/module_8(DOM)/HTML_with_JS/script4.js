const parentElement = document.getElementById("parent-container");


const cardContainer = document.createElement("div");

cardContainer.classList.add("card-container");



//creating card image element

const cardImageElement = document.createElement("img");

cardImageElement.classList.add("img");


cardImageElement.setAttribute("src","https://imgs.search.brave.com/QiY4zxqWCFCw1FJT35uie5LXUttMIVxBMYDfo157Ofs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9iYW5na29r/dGhhaWxhY2xvc2V1/cC1vbi1taWNyb3Nv/ZnQtd2luZG93LTEw/LTI2MG53LTE1MTQw/NDI4NzkuanBn");
 
//creating card text element
const cardTextElement = document.createElement("span");

cardTextElement.innerText = "The journey of th ethousands miles begins with a single step :)";

cardContainer.appendChild(cardTextElement);

parentElement.appendChild(cardContainer)

cardImageElement.setAttribute("alt","travel-card");

cardContainer.appendChild(cardImageElement);

parentElement.append(cardContainer)








