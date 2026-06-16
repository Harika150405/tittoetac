let boxes = document.querySelectorAll(".box1");
let reset = document.querySelector("#but");
let msg = document.querySelector(".msgcontainer");
let newbtn = document.querySelector("#new");
let winners = document.querySelector("#win");

let turn=true;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turn = true;
    enableboxes();
    msg.classList.add("hide");
};
boxes.forEach((box1) => {
    box1.addEventListener("click",() =>{
        console.log("box is clicked");
        if(turn){
            box1.innerText="X";
            turn= false;
        }else{
             box1.innerText="O";
            turn= true;
        }
        box1.style.pointerEvents = 'none'; 
        check();
    });
    
});


const disableboxes = () =>{
    for(let box1 of boxes){
    box1.style.pointerEvents = 'none'; 
    }
};
const enableboxes = () =>{
     for(let box1 of boxes){
       box1.style.pointerEvents = 'auto';
       box1.innerText="";
    }
};
     const Showwinner = (winner) => {
        winners.innerText = ` 🎉 🎊 Congratulations , Winner is ${winner} 👏 💐`;
        msg.classList.remove("hide");
        disableboxes();
    };

const check = () =>{
    for(let pattern of winpatterns){
       
         
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 !="" &&pos1 !=""&& pos1 !="" ){
         if(pos1 === pos2 && pos2 === pos3){
        console.log("winner" , pos1);
        Showwinner(pos1);
       }
      }
    }
};
 reset.addEventListener("click",resetgame);
 newbtn.addEventListener("click",resetgame);
