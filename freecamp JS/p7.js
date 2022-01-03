let firstCard = 10;
let secondCard = 7;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let Message = "";

let mess = document.getElementById("message");
console.log(mess)
// let result = document.getElementById("sum");
let result = document.querySelector("#sum");
let Cds = document.querySelector("#cards");


function startgame() {

    result.textContent = "sum: " + sum;
    Cds.textContent = "Cards: " + firstCard + " " + secondCard;

    if (sum < 21) {
        console.log("Do you want to draw a new card");
    }
    else if (sum === 21) {
        console.log("you have got Black Jack");
        hasBlackJack = true;
    }
    else if (sum > 21) {
        console.log("you are out of the game");
        isAlive = false;
    }
    console.log(hasBlackJack);
    console.log(isAlive);

    mess.textContent = Message;
}

function newCard()
{
      let card = 7;
      sum += card;
      
      startgame()
}
