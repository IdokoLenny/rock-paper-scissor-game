
//  initialize the selection array 
const gameArr=["rock","paper","scissor"]

// <!-- get a random number -->

function getNum(){
    return Math.floor(Math.random() * gameArr.length)
}
// <!-- getPlayerSelection -->

function getPlayerSelection(){
    let pChoice=prompt("Specify your choice: Rock or Paper or Scissor")
    pChoice=pChoice.toLowerCase()
    while (pChoice != "rock" && pChoice != "paper" && pChoice != "scissor") {
        pChoice=prompt("please Specify the right choice: Rock or Paper or Scissor")
        pChoice=pChoice.toLowerCase()
    }
    console.log(`you picked ${pChoice}`)
    return pChoice;
}
 

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
    }else if ((playerSelection=="rock" && computerChoice=="scissor") || (playerSelection=="scissor" && computerChoice=="paper") || (playerSelection=="paper" && computerChoice=="rock")){
        winner="p"
    }
    else {
        winner="c"
    }
    return winner
}

// <!-- write the playGame function to loop 5 times -->

function playGame(){
    let playerCount=0
    let computerCount=0
    let overAllWinner
    for (let i=0; i<=4; i++){
        finalWinner=playRound(getPlayerSelection(),getComputerChoice())
        if (finalWinner=="p"){
            playerCount++
            console.log(`**Scores** \nPlayer: ${playerCount} \nComputer: ${computerCount}`)
        }
        else if (finalWinner=="c"){
            computerCount++
            console.log(`**Scores** \nPlayer: ${playerCount} \nComputer: ${computerCount}`)
        } else{
            console.log(`**Scores** \nPlayer: ${playerCount} \nComputer: ${computerCount}`)
        }
    }
  
    if (playerCount > computerCount){
        overAllWinner="Congratulations you Won!..."
        return overAllWinner
    }
    else if (playerCount < computerCount){
        overAllWinner="Ah! Sorry you lose..."
        return overAllWinner
    }
    else{
        overAllWinner="its a tie"
        return overAllWinner
    }
}

let mainWinner=playGame()
console.log(mainWinner)
