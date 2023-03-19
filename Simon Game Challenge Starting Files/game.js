
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var lost = false;

$(document).keydown(function(event) {
    //alert("Game has started: " + event.key);
    if (event.key=="a") {
        
        $("h1").text("Level "+ level);
        newStep();
        userTurn();
        $("h1").text("Level "+ level);
    }
    if (lost) {
        startOver();
        $("h1").text("Level "+ level);
        setTimeout(function() {
            newStep();
            $("h1").text("Level "+ level);
        }, 1000);
        userTurn();
        $("h1").text("Level "+ level);
    }
    
});

$(".btn").click(function(event) {
    var buttonColor = this.id;
    userClickedPattern.push(buttonColor);

    // Audio
    playAudio(buttonColor);

    // Animation
    $("#"+buttonColor).addClass("pressed");
    setTimeout(function() {
        $("#"+buttonColor).removeClass("pressed");
    }, 70);

    // checkButtonClicks
    if (!checkAnswer()) {
        lost = true;
        playAudio("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game over! Pres any to restart");
    }

    // To the new step
    if (checkAnswer() && userClickedPattern.length == level)  {
        setTimeout(function() {
            newStep();
            $("h1").text("Level "+ level);
        }, 2000);
        userTurn();
        
    }
});

function nextRandomNumber() {
    return Math.floor(Math.random()*4);
}

function newStep() {
    // Random Color 
    var randomNumber = nextRandomNumber();
    var randomChosenColor = buttonColors[randomNumber];
    // Insert into gamePattern
    gamePattern.push(randomChosenColor);
    // Animation and sound of random color
    $("#"+randomChosenColor).fadeOut(70).fadeIn(70);
    playAudio(randomChosenColor);
    // Level Update
    level++;
}

function playAudio(buttonColor) {
    var audio = new Audio("./sounds/"+buttonColor+".mp3");
    audio.play();
}

function checkAnswer() {
    for (var i = 0; i < userClickedPattern.length; i++) {
        if (gamePattern[i] != userClickedPattern[i]) {
            return false;
        }
    }
    return true;
}

function userTurn() {
    userClickedPattern.length = 0;
}

function startOver() {
    lost = false;
    level = 0;
    userClickedPattern.length = 0;
    gamePattern.length = 0;
}

