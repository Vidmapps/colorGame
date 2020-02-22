var numSquares = 6;
var colors = [];
var pickedColor;
/* var pickedColor = colors[Math.round(Math.random()*colors.length)];
 */
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var header = document.querySelector(".header");
var result = document.querySelector(".result");
var newColors = document.querySelector(".newColors");
var mode = document.querySelectorAll(".mode");

 init();

function init(){
modeButtons();
setupSquares()
};

//>>>>>> Mode buttons <<<<<<<
 function modeButtons(){
    for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
            reset();
    })}};

//>>>>>> Click listeneers of aquares <<<<<<<
function  setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        //console.log(pickedColor, clickedColor); - this for a check up;
            if(clickedColor !== pickedColor){
                this.style.backgroundColor = "#232323";
                result.textContent = "Try Again!";
            } else { 
                alert("Correct!");
                result.textContent = "Correct!";
                changeColors(clickedColor);
                newColors.textContent = "Play again?";                 
    }})};
            reset();
};

function reset (){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    newColors.textContent = "New Color";
    result.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block"; 
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
}
    header.style.backgroundColor = "#0000FF";
    newColors.style.backgroundColor = "#0000FF";

};

newColors.addEventListener("click", function(){
    reset();
    });

function pickColor(){
    var random = Math.round(Math.random()*colors.length-1);
    if(random < 0){
        random+=1;
    };
    console.log(random);
    return colors[random];
};

function changeColors(colors){
    header.style.backgroundColor = pickedColor;
    newColors.style.backgroundColor = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
}};

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    return "rgb("+r+", "+g+", "+b+")";
};

            