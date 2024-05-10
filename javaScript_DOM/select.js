//selection an element using JS
let message = document.getElementById('message').innerText;

let number = document.getElementsByClassName('message2').innerText;
let message3 = document.querySelector("#message").innerText;//to select an id
let message4 = document.querySelectorAll("#message");//to select an id
let message5 = document.querySelector("p").innerText;//to select an id
let message6 = document.querySelector(".message2").innerText;//to select an id

let btn = document.querySelector(".btn");
btn.addEventListener('click',() => {
    
    document.getElementById('message').innerText='I am awake';

})

console.log(message5);
//change the text at id = message
document.getElementsByClassName('message2').innerText = 'tu es vilain';


