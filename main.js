let wins = 0;
let loses = 0;

const choices = ["pierre", "papier", "ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  switch (userChoice + "_" + computerChoice) {
    case "pierre_papier":
    case "papier_ciseaux":
    case "ciseaux_pierre":
      loses += 1;
      gameStatus.innerHTML = `${userChoice} /// VS /// ${computerChoice} => Ordi: Wins`;
      break;
    case "pierre_ciseaux":
    case "papier_pierre":
    case "ciseaux_papier":
      wins += 1;
      gameStatus.innerHTML = `${userChoice} /// VS /// ${computerChoice} => Moi: Wins`;
      break;
    case "pierre_pierre":
    case "papier_papier":
    case "ciseaux_ciseaux":
      gameStatus.innerHTML = `${userChoice} /// VS /// ${computerChoice} => Egalité`;
      break;
  }
  gameScore.innerHTML = `Moi: ${wins} | Ordinateur: ${loses}`;
}

rock.addEventListener("click", () => runGame("pierre"));
paper.addEventListener("click", () => runGame("papier"));
scissors.addEventListener("click", () => runGame("ciseaux"));
