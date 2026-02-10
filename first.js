let userScore = 0;
let compScore = 0;

const score = () => {
document.querySelector("#comp-score").innerText = compScore;
document.querySelector("#user-score").innerText = userScore;
}

const game = document.querySelectorAll('.game');

const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const idx = Math.floor(Math.random() * 3);
  const compChoice = options[idx];
  return compChoice;
}

const playGame = userChoice => {
  const compChoice = genCompChoice();
  document.querySelector("#youChose").textContent = ` You Chose: ${userChoice}`;
  document.querySelector("#compChose").textContent = ` Comp Chose: ${compChoice}`;
  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === 'rock' && compChoice === 'paper'||
    userChoice === 'paper' && compChoice === 'scissors'||
    userChoice === 'scissors' && compChoice === 'rock')
  ) {
    youLose();
    compScore++;
    score();
  }else{
    youWin();
    userScore++;
    score();
  }
}

const youLose = () => {
  document.querySelector("#msg").textContent = "You lose the Game";
  document.querySelector("#msg").style.background = "red";
}

const youWin = () => {
  document.querySelector("#msg").textContent = "You won the Game";
  document.querySelector("#msg").style.background = "green";
}

const drawGame = () => {
  document.querySelector("#msg").textContent = "Game is Draw";
  document.querySelector("#msg").style.background = "#393e46";
}

game.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  })
})
