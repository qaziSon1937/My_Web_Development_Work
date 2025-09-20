let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let countClick=0;
let turnO=true;// player 1st turn it track the turn of the player


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if (turnO) {
            box.innerText="O";
            turnO=false;
            box.style.color="#b0413e";
            countClick++;
        }else{
            box.innerText="X";
            turnO=true;
            box.style.color="green";
            countClick++;
        }
        box.disabled=true;
        checkWinner();
    })});

const resetGame=()=> {
    turnO=true;
    countClick=0;
    enableBox();
    msgContainer.classList.add("hide");
};

 const disableBox=()=> {
    for (const box of boxes) {
        box.disabled=true;
    }
 }
 const enableBox=()=> {
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
 }
 
const showWinner=(pos1Val)=> {
msg.innerText=`Congratulation, Winner is ${pos1Val}`;
msgContainer.classList.remove("hide");
disableBox();

}


const checkWinner = ()=> {
for (const Pattern of winPattern) {
       let pos1Val= boxes[Pattern[0]].innerText;
       let pos2Val= boxes[Pattern[1]].innerText;
       let pos3Val= boxes[Pattern[2]].innerText;
    if (pos1Val!="" && pos2Val!="" && pos3Val!="") {
        if (pos1Val===pos2Val && pos2Val===pos3Val) {
            console.log("Winner",pos1Val);
            showWinner(pos1Val);

        }else if (countClick===9) {
            msg.innerText="Match is Draw!";
          msgContainer.classList.remove("hide");  
        }
    }
}
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);