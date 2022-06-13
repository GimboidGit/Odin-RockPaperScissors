const Choices = [ "ROCK", "PAPER", "SCISSORS" ];


function ComputerPlay()
{
    return Choices[Math.floor(Math.random() * 3)]; //Random number between 0 and 2
}


function PlayRound(playerChoice, computerChoice)
{
    playerChoice = String(playerChoice).toUpperCase();
    computerChoice = String(computerChoice).toUpperCase();

    if (playerChoice === computerChoice)
        return "It's a Draw!";

    for (let i = 0; i < Choices.length; i++)
    {
        if (playerChoice === Choices[i] && computerChoice === Choices[(arr.Len - i) - 1])
            return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    return `You Lose! ${computerChoice} beats ${playerChoice}`;
}