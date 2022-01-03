let num1  = 8;
let num2  = 2;

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

let res = document.getElementById("Result");

function add(){   
    let result = num1 + num2;
    res.textContent = "sum : " + result;
    
}

function substract(){
    let result = num1 - num2;
    res.textContent = "substraction : " + result;
}

function multiply(){
    let result = num1 * num2;
    res.textContent = "multiplcation : " + result;
}

function division(){
    let result = num1 / num2;
    res.textContent = "division : " + result;
}



