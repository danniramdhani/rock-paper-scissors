// create function that return rock, paper, or scissors randomly
let computerPlay = function (weapon) {
  return weapon[Math.floor(Math.random() * weapon.length)];
};

let playerSelection = function (userInput) {
  return userInput;
};

function gameRound(a, b) {
  let message;
  let player = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  let com = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();

  if (player === com) {
    message = `Tie! \n${player} vs ${com}`;
  } else if (
    (player === "Rock" && com === "Scissors") ||
    (player === "Scissors" && com === "Paper") ||
    (player === "Paper" && com === "Rock")
  ) {
    message = `Player win! \n${player} vs ${com}`;
  } else if (
    (player === "Scissors" && com === "Rock") ||
    (player === "Paper" && com === "Scissors") ||
    (player === "Rock" && com === "Paper")
  ) {
    message = `Computer win! \n${player} vs ${com}`;
  } else {
    message = "Please enter one of the following: Rock, Paper or Scissors";
  }

  return message;
}

for (let round = 1; round <= 5; round++) {
  let playerInput = playerSelection(prompt("Choose your weapon: "));
  let computerInput = computerPlay(["Rock", "Paper", "Scissors"]);
  console.log(`Round ${round}`);
  console.log(gameRound(playerInput, computerInput));
}
