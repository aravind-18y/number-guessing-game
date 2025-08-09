let correctNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guess-button");
const resultText = document.getElementById("result");
const hintDiv = document.getElementById("hint");
const newGameButton = document.getElementById("new-game-button");

guessButton.addEventListener("click", function () {
  const guess = parseInt(guessInput.value.trim());

  if (!isNaN(guess)) {
    hintDiv.style.display = "block"; // Show the hint div

    if (guess < correctNumber) {
      resultText.textContent = "Too low!";
    } else if (guess > correctNumber) {
      resultText.textContent = "Too high!";
    } else {
      resultText.textContent = "🎉 Correct! You guessed the number!";
    }
  } else {
    resultText.textContent = "";
    hintDiv.style.display = "none";
    alert("Please enter a valid number!");
  }
});

newGameButton.addEventListener("click", function () {
  correctNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  resultText.textContent = "";
  hintDiv.style.display = "none";
});