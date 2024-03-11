//initialize all the variables

let buttons=document.querySelectorAll('button')
// let reset=document.querySelector('.reset')
let container=document.querySelector('.container')
let final=document.querySelector('.final-result')

//  initialize the selection array 
const gameArr=["Rock","Paper","Scissors"];

// <!-- get a random number -->

function getNum(){
    return Math.floor(Math.random() * gameArr.length)
}
// <!-- getPlayerSelection -->
 
let playerCount=0
let computerCount=0
let roundCount=1
let playerScore=document.querySelector('.playerScore')
let computerScore=document.querySelector('.computerScore')

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        let playerChoice=button.textContent
        console.log(playerChoice)
        if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
            final.textContent=" "
            if (playerCount != 5 && computerCount != 5){
                let compChoice=getComputerChoice()
                finalWinner=playRound(playerChoice,compChoice)
                if (finalWinner=="p"){
                    let rounds=document.createElement('p')
                    playerCount++
                    playerScore.textContent=`${playerCount}`
                    computerScore.textContent=`${computerCount}`
                    rounds.textContent=`**Round ${roundCount}** computer choose ${compChoice} ; Player Won`
                    rounds.style.color='green'
                    container.appendChild(rounds)
                }
                else if (finalWinner=="c"){
                    let rounds=document.createElement('p')
                    computerCount++
                    playerScore.textContent=`${playerCount}`
                    computerScore.textContent=`${computerCount}`
                    rounds.textContent=`**Round ${roundCount}** Computer choose ${compChoice} ; Computer Won`
                    rounds.style.color='red'
                    container.appendChild(rounds)
                } else{
                    let rounds=document.createElement('p')
                    playerScore.textContent=`${playerCount}`
                    computerScore.textContent=`${computerCount}`
                    rounds.textContent=`**Round ${roundCount}** Computer choose ${compChoice} ; Draw`
                    container.appendChild(rounds)
                }
                roundCount++
            }
            if (playerCount == 5 || computerCount == 5) {
                if (playerCount > computerCount){
                    final.textContent="Congratulations you Won!..."
                    final.style.color="green"
                }
                else if (playerCount < computerCount){
                    final.textContent="Ah! Sorry you lose..."
                    final.style.color="red"
                }
                else{
                    final.textContent="its a tie"
                }
            }
        }
        else {
            let rounds=document.querySelectorAll('.container p')
            rounds.forEach((round)=> {
                round.textContent=" "
                playerCount=0
                computerCount=0
                roundCount=1
                final.textContent=" "
                playerScore.textContent=`${0}`
                computerScore.textContent=`${0}`
            })
        }    
            })
        })

// <!-- getComputerChoice -->

function getComputerChoice(){
    let num=getNum()
    let comChoice=gameArr[num]
    console.log(`computer picked ${comChoice}`)
    return comChoice
}


// <!-- decide winner -->

function playRound(playerSelection, computerChoice){
    let winner;

    if (playerSelection==computerChoice){
        winner="t"
    }else if ((playerSelection=="Rock" && computerChoice=="Scissors") || (playerSelection=="Scissors" && computerChoice=="Paper") || (playerSelection=="Paper" && computerChoice=="Rock")){
        winner="p"
    }
    else {
        winner="c"
    }
    return winner
}

