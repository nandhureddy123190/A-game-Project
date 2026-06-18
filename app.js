let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll('.choice');

const msg=document.querySelector('#msg');

const userScorepara=document.querySelector('#user-score');
const compScorepara=document.querySelector('#comp-score');

const gencompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const tie=()=>{
    console.log("It's a tie!");
    msg.innerText="It's a tie!";
    msg.style.backgroundColor="#f7e875";
    msg.style.color="black";
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#7efc6f";
        msg.style.color="black";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("Computer wins!");
        msg.innerText=`Computer wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#f77e7e";
        msg.style.color="black";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice:", userChoice);
    //generate computer choice
    const compchoice=gencompChoice();
    console.log("comp choice:", compchoice);

    if(userChoice===compchoice){
        tie();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper"?false :true;
        }else if(userChoice==="paper"){
            userwin=compchoice==="scissors"?false :true;
        }else {
            userwin=compchoice==="rock"?false :true;
        }
        showWinner(userwin, userChoice, compchoice);
    }
};
choices.forEach((choice)=>{
    const userChoice=choice.getAttribute('id');
    choice.addEventListener('click',()=>{
        playGame(userChoice);
    });
});