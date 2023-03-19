
function generateRandomNumber()  {
    var randomNumber = Math.ceil(Math.random()*6);
    return randomNumber;
}

var randomNumber1 = generateRandomNumber();
var randomNumber2 = generateRandomNumber();

document.querySelector(".dice .img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

function decideWinner() {
    if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Player1 wins!";
    }
    else if (randomNumber1 == randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Draw!";
    }
    else {
        document.getElementsByTagName("h1")[0].textContent = "Player2 wins!";
    }
}

decideWinner();


