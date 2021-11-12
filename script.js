// create function that return rock, paper, or scissors randomly
let computerPlay = function (weapon) {
    return weapon[Math.floor(Math.random() * weapon.length)];
};

// create function where user can input their weapon
let playerSelection = function (userInput) {
    return userInput;
};

// create gameRound function that showing the winner every turn
let playerScore = 0;
let computerScore = 0;

// fungsi untuk menjalankan game
function gameRound(player, com) {
    let rock = (document.createElement("p").innerHTML =
        '<i class="far fa-hand-rock"></i>');
    let paper = (document.createElement("p").innerHTML =
        '<i class="far fa-hand-paper"></i>');
    let scissors = (document.createElement("p").innerHTML =
        '<i class="far fa-hand-scissors"></i>');

    let playerMessage = document.querySelector(".player-message");
    let computerMessage = document.querySelector(".computer-message");

    if (
        (player === "Rock" && com === "Scissors") ||
        (player === "Scissors" && com === "Paper") ||
        (player === "Paper" && com === "Rock")
    ) {
        ++playerScore;
        computerScore += 0;
        document.getElementById(
            "player-score"
        ).innerText = `Player: ${playerScore}`;
        playerMessage.style.backgroundColor = "#DEBA40";
        computerMessage.style.backgroundColor = "transparent";
    } else if (
        (player === "Scissors" && com === "Rock") ||
        (player === "Paper" && com === "Scissors") ||
        (player === "Rock" && com === "Paper")
    ) {
        ++computerScore;
        playerScore += 0;
        document.getElementById(
            "computer-score"
        ).innerText = `Computer: ${computerScore}`;
        computerMessage.style.backgroundColor = "#DEBA40";
        playerMessage.style.backgroundColor = "transparent";
    } else {
        playerScore += 0;
        computerScore += 0;
        computerMessage.style.backgroundColor = "transparent";
        playerMessage.style.backgroundColor = "transparent";
    }

    if (player === "Rock") {
        playerMessage.innerHTML = `${rock}`;
    } else if (player === "Paper") {
        playerMessage.innerHTML = `${paper}`;
    } else if (player === "Scissors") {
        playerMessage.innerHTML = `${scissors}`;
    }

    if (com === "Rock") {
        computerMessage.innerHTML = `${rock}`;
    } else if (com === "Paper") {
        computerMessage.innerHTML = `${paper}`;
    } else if (com === "Scissors") {
        computerMessage.innerHTML = `${scissors}`;
    }
}
const weapon = ["Rock", "Paper", "Scissors"];
let isPlayerWin = false;
let isComputerWin = false;

function winnerCheck() {
    if (playerScore === 5) {
        isPlayerWin = true;
    } else if (computerScore === 5) {
        isComputerWin = true;
    }
}

// Select all the buttons with the class "btn"
const buttons = document.querySelectorAll(".btn");

// jalankan fungsi ini pada setiap button yang ter-selected
buttons.forEach((btn) => {
    // menambahkan event listener "click" pada setiap btn
    btn.addEventListener("click", (e) => {
        // pada file html telah di set value (rock, paper, scissors) untuk setiap masing-masing
        // tombol, ambil value tersebut dan simpan pada variable dibawah
        const value = e.target.attributes[1].value;
        // jalankan game
        gameRound(playerSelection(value), computerPlay(weapon));
        console.log(playerSelection(value));
        console.log(computerPlay(weapon));

        // winnerCheck() berfungsi untuk mengubah value isPlayerWin dan isComputerWin dari false
        // menjadi true apabila player atau computer telah mencapai score 5.
        winnerCheck();
        // replace for restart button in future
        if (isPlayerWin === true || isComputerWin === true) {
            // Kode ini adalah untuk menonaktifkan semua buttons apabila salah satu dari player
            // atau computer telah menang
            //
            // Kita harus mengambil array dari buttons (querySelectorAll(".btn")) agar semua
            // buttons become selected
            Array.from(buttons).forEach((btn) => {
                btn.disabled = true;
            });
        }
        // Condition check ini berfungsi untuk menampilkan pesan yang berbeda jika player atau computer
        // menang
        if (isPlayerWin === true) {
            document.getElementById("winner").innerText = "Player win!";
        } else if (isComputerWin === true) {
            document.getElementById("winner").innerText = "Computer win!";
        }
    });
});
