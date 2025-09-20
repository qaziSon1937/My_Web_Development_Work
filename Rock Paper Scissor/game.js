let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const compScorePara=document.querySelector("#comp-score");
const userScorePara=document.querySelector("#user-score");

 const genCompChoice=()=> {
    const option=["rock","paper","scissors"];
    const randIds=Math.floor(Math.random()*3);
    return option[randIds];
 }

 const drawGame=()=> {
    console.log("Game was Draw");
    msg.innerText="Draw Game.Try Again!";
    msg.style.backgroundColor=" #081b31";
 }

 const showWinner=(userWin)=> {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="YOU LOST!";
        msg.style.backgroundColor="red";
    }
 }

const playGame=(userChoice)=> {
console.log("User Choice =",userChoice);
// Generate Computer choice
const compChoice=genCompChoice();
console.log("Comp Choice =",compChoice);
if (userChoice===compChoice) {
    //Draw Game
    drawGame();
}else{
let userWin=true;
if (userChoice==="rock") {
 userWin= compChoice==="paper" ? false:true;  
}else if (userChoice==="paper") {
   userWin= compChoice==="scissors" ? false:true;  
}else{
    userWin= compChoice==="rock" ? false:true; 
}
showWinner(userWin);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");

playGame(userChoice);
    })
})