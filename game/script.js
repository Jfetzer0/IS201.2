let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function showMessage(message, type) {
  const box = document.getElementById("messageBox");
  box.textContent = message;
  box.className = "message-box " + type;
  box.style.display = "block";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage("Please enter a number between 1 and 100.", "warning");
    return;
  }

  if (guess === secretNumber) {
    showMessage(`🎉 Congratulations! You guessed it in ${attempts} attempts!`, "success");
  } else if (guess < secretNumber) {
    showMessage("Too low! Guess higher.", "error");
  } else {
    showMessage("Too high! Guess lower.", "error");
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("messageBox").style.display = "none";
}
