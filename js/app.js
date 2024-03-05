
//  initialize the selection array 
const gameArr=["rock","paper","scissors"]

// <!-- get a random number -->

function getNum(){
    return Math.floor(Math.random() * gameArr.length)
}

// <!-- getPlayerSelection -->

function getPlayerSelection(){
    let pChoice=prompt("Specify your choice: Rock or Paper or Scissor")
    pChoice=pChoice.toLowerCase()
    while (pChoice != "rock" && pChoice != "paper" && pChoice != "scissor") {
        pChoice=prompt("please Specify your choice: Rock or Paper or Scissor")
        pChoice=pChoice.toLowerCase()
    }
    return pChoice;
}
 let playerChoice=getPlayerSelection();
 console.log(playerChoice)
// <!-- getComputerChoice -->

// <!-- decide winner -->

// <!-- write the playGame function to loop 5 times -->

