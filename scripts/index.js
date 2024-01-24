var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {

    player1 = prompt("Change Player 1 Name");
    player2 = prompt("Change Player 2 Name");
    
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
    
}

function rollTheDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource = "images/" + randomDiceImage;
    var randomImageSource2 = "images/" + randomDiceImage2;

    document.querySelector(".img1").setAttribute("src", randomImageSource);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1 + " WINS!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = player2 + " WINS!";
    } else {
        document.querySelector("h1").innerHTML = "DRAW!";
    }

}