const Choices = [ "Rock", "Paper", "Scissors" ];


function ComputerPlay()
{
    return Choices[Math.floor(Math.random() * 3)]; //Random number between 0 and 2
}