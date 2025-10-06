let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

const resetGame = () => {
    turnO = true;
    enabaleBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){

            box.style.color = "#8093F1";
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
            box.style.color = "#b0413e";
        }
        box.disabled = "true";
        count++;

       let isWinner = checkWinner();

       if(count === 9 && !isWinner){
        showDraw();
       }
    });
});

const showDraw = () => {
        msg.innerText = "The Game is Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
};

const enabaleBoxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
};



const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            } 
        } 
}
};



newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

