var numSquare = 6;
var colors = generateRandomColors(numSquare);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");

squares.forEach(function (element, i) {
    //add initial colors to squares
    element.style.backgroundColor = colors[i];

    //add click event listeners to squares
    element.addEventListener("click", function () {

        //store color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare the stored square to the picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "You Got It"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
             this.style.backgroundColor = "black"
            messageDisplay.textContent = "Try Again"
        }
    })
});

function changeColors(color) {
    //Change all squares to match correct color
    for (var i = 0; i< colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    var arr = [];

    for( var i = 0; i< num; i++){
        //get random colors
        arr.push(randomColor());

    }

    return arr;
}

function randomColor() {
    // pick a red, green, blue from 0 - 255
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);
    //rgb(0, 0 ,255) form
    var rgb = "rgb(" + r +", " + g+", "+b+")";
    return rgb;
}
resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquare);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "darkgray";
});

easyButton.addEventListener("click", function () {
    numSquare = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquare);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display= "none";
        }
    }

});

hardButton.addEventListener("click", function () {
    numSquare = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(numSquare);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i< squares.length; i++){

            squares[i].style.backgroundColor = colors[i];

            squares[i].style.display= "block";

    }
});
