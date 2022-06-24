const Choices = [ "ROCK", "PAPER", "SCISSORS" ];

alert(Game());



function Game()
{
    let playerWins = 0;
    let computerWins = 0;

    let result = "DRAW";

    //HANDLE DRAWS
    while (result.toUpperCase().includes("DRAW"))
    {
        let playerChoice = GetPlayerChoice();
        let computerChoice = ComputerPlay();

        if (playerChoice === null)
            return "You've forfeited! Computer wins.";

        result = PlayRound(playerChoice, computerChoice);
    }
    
    //Record result.
    result.toUpperCase().includes("WIN") ? playerWins++ : computerWins++;

    let finalScore = `Player Wins: ${playerWins}\r\nComputer Wins: ${computerWins}`;

    let resultWording = playerWins > computerWins ? "Win" : "Lose";

    return `You ${resultWording}!\r\n\r\n${finalScore}`;
}


function ComputerPlay()
{
    return Choices[Math.floor(Math.random() * 3)]; //Random number between 0 and 2
}


function GetPlayerChoice()
{
    let message = "Choose one of the following:\r\n";
    message += Choices.join("\r\n");

    let choice = prompt(message);

    //User cancelled Prompt.
    if (choice === null)
        return choice;

    //Validate Choice.
    if (!Choices.includes(choice.trim().toUpperCase()))
    {
        alert("Choice invalid. Try again!");
        choice = GetPlayerChoice();
    }

    return choice;
}


function PlayRound(playerChoice, computerChoice)
{
    playerChoice = String(playerChoice).toUpperCase();
    computerChoice = String(computerChoice).toUpperCase();

    if (playerChoice === computerChoice)
        return "It's a Draw!";

    for (let i = 0; i < Choices.length; i++)
    {
        if (playerChoice === Choices[i] && computerChoice === Choices[(Choices.length - i) - 1])
            return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    return `You Lose! ${computerChoice} beats ${playerChoice}`;
}