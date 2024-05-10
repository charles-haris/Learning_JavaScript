

let result = document.getElementById("result");//to select an id
let first_number = document.getElementById("first_number");
let second_number = document.getElementById("second_number");//to select an id

//let message5 = document.querySelector("p").innerText;//to select an id
//let message6 = document.querySelector(".message2").innerText;//to select an id
function Addition(){
    console.log('TREATEMENT 1');
    let first_number_input = first_number.value = "" ? 0 : parseFloat(first_number.value);
    let second_number_input =second_number.value = "" ? 0 : parseFloat(second_number.value);
    console.log('TREATEMENT 2');

    let resutlAdd= first_number_input + second_number_input 
    result.innerText = first_number+" + "+first_number +" = "+(resutlAdd) ;

}

 let btn = document.querySelector("#btn");
btn.addEventListener('click',() => {
    Addition();

}) 

first_number.addEventListener('input',function () {
    alert();
    Addition();
}) 

second_number.addEventListener('input',() => {
    Addition();
}) 
//change the text at id = message


