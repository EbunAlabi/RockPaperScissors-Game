let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//gives a random number between 0 and 1
function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3) ;
    //console.log( Math.floor(Math.random() * 3) );
    return choices[randomNumber];
}
console.log(getComputerChoice());

function convertToWord(letter){
    if (letter === "r") return "Rock";
     if (letter === "p") return "Paper";
      if (letter === "s") return "Scissors";
}


function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("Win");
    console.log(userScore);
    console.log(computerScore);
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord (computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add("green_glow");
    setTimeout(() =>userChoice_div.classList.remove("green_glow"), 300);
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);

    console.log("Lose");
    console.log(userScore);
    console.log(computerScore);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord (computerChoice)}${smallCompWord}. You Lost!`; 
    userChoice_div.classList.add("red_glow");
    setTimeout(()=> userChoice_div.classList.remove("red_glow"), 300);
}
function draw(userChoice,computerChoice){
    
    console.log("Draw");
    console.log(userScore);
    console.log(computerScore);
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord (computerChoice)}${smallCompWord}. Draw!`;
    userChoice_div.classList.add("grey_glow");
    setTimeout(( ) => userChoice_div.classList.remove("grey_glow"), 300);
}





function game(userChoice){
    console.log("poop! " + userChoice);
    const computerChoice = getComputerChoice();
    console.log("computer Choice =>" + computerChoice);
    console.log ("user choice =>" + userChoice);
        switch (userChoice  +  computerChoice){
            case "rs":
            case "pr":
            case "sp":
                console.log ("User Wins.");
                win(userChoice,computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                console.log ("User Loses.");
                lose(userChoice,computerChoice);
                break;
             case "rr":
            case "pp":
            case "ss":
                console.log ("Draw");
                draw(userChoice, computerChoice);
                break;
        }
    
};



function main(){
        //ES5 code down below around function
        rock_div.addEventListener('click', function(){
            console.log("hey you clicked on rock!");
            game("r");
        });
        paper_div.addEventListener('click', function(){
            console.log("hey you clicked on paper!");
            game("p");
        });
        scissors_div.addEventListener('click', function(){
            console.log("hey you clicked on scissors!");
            game("s");
        });


}

main();






