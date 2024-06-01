let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#userScore');
const compScorePara = document.querySelector('#compScore');

const generateCompChoice = () => {
    const option = ['rock', 'scissor', 'paper'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'You win!🥳';
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = 'You lose!😞';
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    msg.innerText = 'Game was Draw. Play Again!🫠';
    // msg.style.marginLeft = '36%';
    msg.style.backgroundColor = 'violet';
};


const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissor'? false : true;
        }else{
            userWin = compChoice === 'rock'? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
