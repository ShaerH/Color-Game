var numSquare = 6;
var colors = generateRandomColors(numSquare);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = colors[Math.floor(Math.random() * colors.length)];
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easy");
// var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
init();

function init() {

    squares.forEach(function (element, i) {
        reset();

        //add click event listeners to squares
        element.addEventListener("click", function () {

            //store color of clicked square
            var clickedColor = this.style.backgroundColor;

            //compare the stored square to the picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "You Got It";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "black";
                messageDisplay.textContent = "Try Again"
            }
        })
    });

    resetButton.addEventListener("click", function () {

        reset();

    });
    //mode buttons event listener
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
            reset();
        });
    }
}


function changeColors(color) {
    //Change all squares to match correct color
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        //get random colors
        arr.push(randomColor());

    }

    return arr;
}

function randomColor() {
    // pick a red, green, blue from 0 - 255
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);
    //rgb(0, 0 ,255) form
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}


function reset() {
    colors = generateRandomColors(numSquare);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "darkgray";
}

//
// easyButton.addEventListener("click", function () {
//     numSquare = 3;
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     colors = generateRandomColors(numSquare);
//     pickedColor = colors[Math.floor(Math.random()*colors.length)];
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i< squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display= "none";
//         }
//     }
//     h1.style.backgroundColor = "darkgray";
//
//
// });
//
// hardButton.addEventListener("click", function () {
//     numSquare = 6;
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     colors = generateRandomColors(numSquare);
//     pickedColor = colors[Math.floor(Math.random()*colors.length)];
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i< squares.length; i++){
//
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display= "block";
//
//     }
//     h1.style.backgroundColor = "darkgray";
//
// });
