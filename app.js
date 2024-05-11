const colors = ["Pink","green", "blue" ,"aqua","red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
//
const color = document.querySelector(".color");
btn.addEventListener("click", ()=> {
//obtener un numero aleatorio entre 0 y 3
const randomNumber = getRandomNumber();
const colorPicked = colors[randomNumber];
//cambiar el body
document.body.style.backgroundColor = colorPicked;
color.textContent = colorPicked;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}