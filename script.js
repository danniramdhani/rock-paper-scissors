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
    if (
        (player === "Rock" && com === "Scissors") ||
        (player === "Scissors" && com === "Paper") ||
        (player === "Paper" && com === "Rock")
    ) {
        ++playerScore;
        computerScore += 0;
        document.getElementById(
            "player-score"
        ).innerText = `Player = ${playerScore}`;
    } else if (
        (player === "Scissors" && com === "Rock") ||
        (player === "Paper" && com === "Scissors") ||
        (player === "Rock" && com === "Paper")
    ) {
        ++computerScore;
        playerScore += 0;
        document.getElementById(
            "computer-score"
        ).innerText = `Computer = ${computerScore}`;
    } else {
        playerScore += 0;
        computerScore += 0;
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
