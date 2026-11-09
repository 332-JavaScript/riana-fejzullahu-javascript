
let choices = ["rock", "paper", "scissors"];

let userScore = 0;
let botScore = 0;

alert("Welcome to Rock, Paper, Scissors! You'll be playing against a bot. First to score three wins!");

while (userScore < 3 && botScore < 3) {

    let botChoice = choices[Math.floor(Math.random() * choices.length)];

    let userChoice = prompt("Choose: r for Rock, p for Paper, s for Scissors:").toLowerCase();

    if (userChoice === "r") {
        userChoice = "rock";
    }
    else if (userChoice === "p") {
        userChoice = "paper";
    }
    else if (userChoice === "s") {
        userChoice = "scissors";
    }
    else {
        alert("Please choose a valid choice.");
        continue;
    }

    alert("You chose: " + userChoice + "\nBot chose: " + botChoice);

    if (userChoice === botChoice) {
        alert("It's a tie!");
    }
    else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) {
        alert("One point for you!");
        userScore++;
    }
    else {
        alert("One point for the bot!");
        botScore++;
    }

    alert(
        "Current score:\nYou: " + userScore +
        "\nBot: " + botScore
    );
}

if (userScore === 3) {
    alert("Congratulations! You won!");
}
else {
    alert("You lost! Better luck next time!");
}
