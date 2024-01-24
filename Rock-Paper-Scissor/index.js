const choices=['Rock','Paper','Scissor'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('resultDisplay');

const playerScoreDisplay=document.getElementById('playerScoreDisplay');
const computerScoreDisplay=document.getElementById('computerScoreDisplay');
let playerScore=0;
let computerScore=0;
function playGame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice)
    {
        result="IT'S TIE!";
    }
    else{
        switch(playerChoice){
            case 'Rock':
                result=(computerChoice==='Scissor')?"YOU WIN😀":"YOU LOSE😞!!!";
                break;
            case 'Paper':
                result=(computerChoice==='Rock')?"YOU WIN😀":"YOU LOSE😞!!!";
                break;
            case 'Scissor':
                result=(computerChoice==='Paper')?"YOU WIN😀":"YOU LOSE😞!!!";
                break;
        }
    }
    playerDisplay.textContent= `PLAYER:${playerChoice}`;
    computerDisplay.textContent=`COMPUTER:${computerChoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("greenTxt","redTxt");
    switch(result)
    {
        case "YOU WIN😀":
            resultDisplay.classList.add("greenTxt");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE😞!!!":
            resultDisplay.classList.add("redTxt");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }
    if(playerScore<computerScore)
    {
        alert("YOU LOST THE GAME!!!.TRY AGAIN");
        location.reload();
    }
}