 const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");
const player1NameDisplay = document.querySelector("#player1NameDisplay");
const player2NameDisplay = document.querySelector("#player2NameDisplay");
// const player1ScoreDisplay = document.querySelector("#player1Score");
// const player2ScoreDisplay = document.querySelector("#player2Score");

const player1NameInput = document.querySelector("#player1Name");
const player2NameInput = document.querySelector("#player2Name");


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
let player1Name = "";
let player2Name = "";

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-success", "winning-team");
            p2Display.classList.add("has-text-danger", "losing-team");
            p1Button.disabled = true;
            p2Button.disabled = true;
            alert(`${player1Name} wins!`);
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-success", "winning-team");
            p1Display.classList.add("has-text-danger", "losing-team");
            p1Button.disabled = true;
            p2Button.disabled = true;
            alert(`${player2Name} wins!`);
        }
        p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("has-text-success", "winning-team");
    p2Display.classList.remove("has-text-success", "winning-team");
    p1Display.classList.remove("has-text-danger", "losing-team");
    p2Display.classList.remove("has-text-danger", "losing-team");
    p1Button.disabled = false;
    p2Button.disabled = false;
    player1Name = player1NameInput.value || "Player One ";
    player2Name = player2NameInput.value || "Player Two ";
    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;
    // player1ScoreDisplay.textContent = "0";
    // player2ScoreDisplay.textContent = "0";

    player1NameInput.value = ""; // Clear player 1 input
    player2NameInput.value = ""; // Clear player 2 input

    player1NameDisplay.textContent = "Player One "; // Reset player one display name
    player2NameDisplay.textContent = "Player Two "; // Reset player two display name
//     player1NameDisplay.textContent = "";
// player2NameDisplay.textContent = "";
}

player1NameInput.addEventListener("input", function () {
    player1Name = this.value;
    player1NameDisplay.textContent = player1Name;
});

player2NameInput.addEventListener("input", function () {
    player2Name = this.value;
    player2NameDisplay.textContent = player2Name;
});


// // ... (previous code)

// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const resetButton = document.querySelector("#reset");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
// const winningScoreSelect = document.querySelector("#playto");
// const player1NameDisplay = document.querySelector("#player1NameDisplay");
// const player2NameDisplay = document.querySelector("#player2NameDisplay");
// const player1NameInput = document.querySelector("#player1Name");
// const player2NameInput = document.querySelector("#player2Name");
// const player1ScoreDisplay = document.querySelector("#player1Score");
// const player2ScoreDisplay = document.querySelector("#player2Score");

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = false;
// let player1Name = "";
// let player2Name = "";

// p1Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p1Score += winningScore;
//         if (p1Score >= winningScore) {
//             isGameOver = true;
//             p1Display.classList.add("has-text-success", "winning-team");
//             p2Display.classList.add("has-text-danger", "losing-team");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//             alert(`${player1Name} wins!`);
//         }
//         player1ScoreDisplay.textContent = p1Score;
//     }
// });

// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score += winningScore;
//         if (p2Score >= winningScore) {
//             isGameOver = true;
//             p2Display.classList.add("has-text-success", "winning-team");
//             p1Display.classList.add("has-text-danger", "losing-team");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//             alert(`${player2Name} wins!`);
//         }
//         player2ScoreDisplay.textContent = p2Score;
//     }
// });

// winningScoreSelect.addEventListener("change", function () {
//     winningScore = parseInt(this.value);
//     reset();
// });

// resetButton.addEventListener("click", reset);

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
//     p1Display.classList.remove("has-text-success", "winning-team");
//     p2Display.classList.remove("has-text-success", "winning-team");
//     p1Display.classList.remove("has-text-danger", "losing-team");
//     p2Display.classList.remove("has-text-danger", "losing-team");
//     p1Button.disabled = false;
//     p2Button.disabled = false;
//     player1Name = player1NameInput.value || "Player One Result";
//     player2Name = player2NameInput.value || "Player Two Result";
//     player1NameDisplay.textContent = player1Name;
//     player2NameDisplay.textContent = player2Name;
//     player1ScoreDisplay.textContent = "0";
//     player2ScoreDisplay.textContent = "0";
//     player1NameInput.value = ""; // Clear player 1 input
//     player2NameInput.value = ""; // Clear player 2 input
//     player1NameDisplay.textContent = "Player One"; // Reset player one display name
//     player2NameDisplay.textContent = "Player Two"; // Reset player two display name
// }

// player1NameInput.addEventListener("input", function () {
//     player1Name = this.value;
//     player1NameDisplay.textContent = player1Name;
// });

// player2NameInput.addEventListener("input", function () {
//     player2Name = this.value;
//     player2NameDisplay.textContent = player2Name;
// });
