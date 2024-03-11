//initialize all the variables

let buttons=document.querySelectorAll('button')
let reset=document.querySelector('.reset')
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

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        let playerChoice=button.textContent
        
            final.textContent=" "
            if (playerCount !== 8 && computerCount !== 8){
                finalWinner=playRound(playerChoice,getComputerChoice())
                if (finalWinner=="p"){
                    let rounds=document.createElement('p')
                    playerCount++
                    rounds.textContent=`**Round ${roundCount}** Player: ${playerCount} Computer: ${computerCount} ; Player Won`
                    container.appendChild(rounds)
                }
                else if (finalWinner=="c"){
                    let rounds=document.createElement('p')
                    computerCount++
                    rounds.textContent=`**Round ${roundCount}** Player: ${playerCount} Computer: ${computerCount} ; Computer Won`
                    container.appendChild(rounds)
                } else{
                    let rounds=document.createElement('p')
                    rounds.textContent=`**Round ${roundCount}** Player: ${playerCount} Computer: ${computerCount} ; Draw`
                    container.appendChild(rounds)
                }
                roundCount++
            }
            while (playerCount == 5 || computerCount == 5) {
                if (playerCount > computerCount){
                    final.textContent="Congratulations you Won!..."
                }
                else if (playerCount < computerCount){
                    final.textContent="Ah! Sorry you lose..."
                }
                else{
                    final.textContent="its a tie"
                }
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

