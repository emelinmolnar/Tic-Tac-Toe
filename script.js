window.onload = startGame;
let xTurn = true; //X starts the game
let attempts = 9;
let checkedArray = []; //This array contains information regarding whether a box contains an "X", a "0" or nothing, yet.
let gameOver = false; //the game is still going.
let combinationsOfWinning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
function eventsListeners () {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    box1.addEventListener("click", () => { clickHandler("box1"); }, { once : true });
    box2.addEventListener("click", () => { clickHandler("box2"); }, { once : true });
    box3.addEventListener("click", () => { clickHandler("box3"); }, { once : true });
    box4.addEventListener("click", () => { clickHandler("box4"); }, { once : true });
    box5.addEventListener("click", () => { clickHandler("box5"); }, { once : true });
    box6.addEventListener("click", () => { clickHandler("box6"); }, { once : true });
    box7.addEventListener("click", () => { clickHandler("box7"); }, { once : true });
    box8.addEventListener("click", () => { clickHandler("box8"); }, { once : true });
    box9.addEventListener("click", () => { clickHandler("box9"); }, { once : true });
} 



function startGame() {
    eventsListeners(); 
}

function checkWinLoseDraw() {
    for (let i = 0; i < combinationsOfWinning.length; i++) {
        if (checkedArray[combinationsOfWinning[i][0]] == "circle" && checkedArray[combinationsOfWinning[i][1]] == "circle" && checkedArray[combinationsOfWinning[i][2]] == "circle") {
            gameOver = true;
            alert("Circle won");
            break;
        } else if (checkedArray[combinationsOfWinning[i][0]] == "x" && checkedArray[combinationsOfWinning[i][1]] == "x" && checkedArray[combinationsOfWinning[i][2]] == "x") {
            gameOver = true;
            alert("X won");
            break;
        } else if (attempts == 0) {
            gameOver = true;
            alert("Draw");
            break;
        }
    }
    if (gameOver == true) {
        location.reload();
    }
}
function clickHandler (box) { //box has the form: "(box1), (box2), (box3), (box4), ... , (box9)";
    --attempts; //if a sign has been put, lower the turns until the end of game.
    let currentBox = document.getElementById(box);
    let currentTurn = "";
    if(xTurn == true) {
        currentTurn += "x";
        checkedArray[box.charAt(3)] = "x";  //box.charAt[0] = 'b', //box.charAt[3] = an integer (the actual box number)
    } else {
        currentTurn += "circle";
        checkedArray[box.charAt(3)] = "circle";
    }
    currentBox.classList.add(currentTurn); //add "circle" or "x" as class to the clicked box, and using css, the box'll be filled with the corresponding mark.
    changeTurn();   //switch between X and 0 
    checkWinLoseDraw(); 
}



function changeTurn() {
    xTurn = !xTurn;
}






