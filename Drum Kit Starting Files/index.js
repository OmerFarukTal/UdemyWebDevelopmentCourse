var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {        
        
        var buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    var audio;

    if (key == "w") audio = new Audio("sounds/tom-1.mp3");
    else if (key == "a") audio = new Audio("sounds/tom-2.mp3");
    else if (key == "s") audio = new Audio("sounds/tom-3.mp3");
    else if (key == "d") audio = new Audio("sounds/tom-4.mp3");
    else if (key == "j") audio = new Audio("sounds/crash.mp3");
    else if (key == "k") audio = new Audio("sounds/snare.mp3");
    else if (key == "l") audio = new Audio("sounds/kick-bass.mp3");
    else {
        console.log("Other button");
        return;
    }
    audio.play();
}

function buttonAnimation(curKey) {
    var curButton = document.querySelector("."+curKey);
    curButton.classList.add("pressed");
    setTimeout(function() {
        curButton.classList.remove("pressed");
    }, 100);
}