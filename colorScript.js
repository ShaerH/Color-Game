var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
var pickedColor = colors[4];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
