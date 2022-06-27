const Choices = [ "ROCK", "PAPER", "SCISSORS" ];


//Add Event Listeners to buttons.
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach
    (button => button.addEventListener("click", PlayRound));



let roundCount = 1;
let playerWins = 0;
let computerWins = 0;

//Play a round of RPS with the choice passed via the BUTTON clicked.
function PlayRound(event)
{
    if (roundCount > 5)
        return;

    let playerChoice = event.target.innerText;
    let computerChoice = ComputerPlay();
    
    let result = GetRoundResult(playerChoice, computerChoice);

    AddToResultPane(`Round ${(roundCount)}: ${result}`);

    if (result.includes("DRAW"))
        return;

    roundCount++;
    result.toUpperCase().includes("WIN") ? playerWins++ : computerWins++;

    if (roundCount > 5)
    {
        let finalScore = `Player Wins: ${playerWins}\r\nComputer Wins: ${computerWins}`;
        let resultWording = playerWins > computerWins ? "Win" : "Lose";

        AddToResultPane(`You ${resultWording}!\r\n\r\n${finalScore}`);
        AddPlayAgainButton();
    }
}


function AddToResultPane(text)
{
    const resultPane = document.querySelector(".results");

    const para = document.createElement("p");
    para.innerText = text;
    resultPane.appendChild(para);
}

function AddPlayAgainButton()
{
    const body = document.querySelector("body");
    
    const playAgain = document.createElement("button");
    
    playAgain.innerText = "Play Again?";
    //This will reload the page when clicked.
    playAgain.addEventListener("click", () => { location.reload(); })

    body.appendChild(playAgain);
}


function ComputerPlay()
{
    return Choices[Math.floor(Math.random() * 3)]; //Random number between 0 and 2
}


function GetRoundResult(playerChoice, computerChoice)
{
    playerChoice = String(playerChoice).toUpperCase();
    computerChoice = String(computerChoice).toUpperCase();

    if (playerChoice === computerChoice)
        return "It's a DRAW! Try again...";

    for (let i = 0; i < Choices.length; i++)
    {
        let prevIndex = i - 1;
        if (i === 0) //Wrap back round to end of array.
            prevIndex = 2;

        if (playerChoice === Choices[i] && computerChoice === Choices[prevIndex])
            return `You WIN! ${playerChoice} beats ${computerChoice}`;
    }

    return `You LOSE! ${computerChoice} beats ${playerChoice}`;
}