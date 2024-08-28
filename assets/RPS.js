//Variable declaration
//Input/Output
let cpuChoice;
let userChoice;
//Score tracker
let wins = 0;
let ties = 0;
let losses = 0;
let choseR = 0;
let choseP = 0;
let choseS = 0;
//Function declarations
//New prompt() for invalid input from user
function checkInput() {
    if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
        switch(userChoice) {
            case 'R':
                //R
                choseR += 1;
                break;
            case 'P':
                //P
                choseP += 1;
                break;
            case 'S':
                //S
                choseS += 1;
                break;
            default:
                userChoice = prompt("Please pick a valid option from 'R', 'P' or 'S' to play.");
                checkInput();
        }
    }
}
//Computer calculates random R, P or S in return
function cpuMove() {
    cpuChoice = Math.floor(Math.random() * 3);
    switch(cpuChoice) {
        case 1:
            //R
            cpuChoice = "R";
            break;
        case 2:
            //P
            cpuChoice = "P";
            break;
        case 3:
            //S
            cpuChoice = "S";
            break;
    }
}
//Who wins?
function calculateWin() {
    //TIE
    if (userChoice == cpuChoice) {
        alert(`TIE! You chose: ${userChoice}. CPU chose: ${cpuChoice}`);
        ties += 1;
    }
    //USER WINS
    if (userChoice == "P" && cpuChoice == "R") {
        alert(`YOU WIN! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        wins += 1;
    }
    if (userChoice == "S" && cpuChoice == "P") {
        alert(`YOU WIN! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        wins += 1;
    }
    if (userChoice == "R" && cpuChoice == "S") {
        alert(`YOU WIN! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        wins += 1;
    }
    //CPU WINS
    if (userChoice == "R" && cpuChoice == "P") {
        alert(`YOU LOSE! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        losses += 1;
    }
    if (userChoice == "P" && cpuChoice == "S") {
        alert(`YOU LOSE! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        losses += 1;
    }
    if (userChoice == "S" && cpuChoice == "R") {
        alert(`YOU LOSE! You chose: ${userChoice}. CPU chose: ${cpuChoice}.`);
        losses += 1;
    }
}
//Prompt() user for R, P or S
function play() {
    userChoice = prompt("Rock, Paper, Scissors! Enter 'R', 'P' or 'S' to play.");
    checkInput();
    cpuMove();
    calculateWin();
    playAgain();
}
//Play again confirm()
function playAgain() {
    if (window.confirm("Play again?")) {
        play();
    }
    else {
        stats();
    }
}

//Total wins, ties, and losses if not playing again
//ALSO how many times user chose R, P or S by an alert()
function stats() {
    alert(`Thanks for playing!
        Wins: ${wins}
        Losses: ${losses}
        Ties: ${ties}
        You chose Rock ${choseR} times!
        You chose Paper ${choseP} times!
        You chose Scissors ${choseS} times!`);
}

play();