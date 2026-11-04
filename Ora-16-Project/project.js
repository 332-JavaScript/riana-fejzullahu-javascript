let wordList = ["colors", "phoenix", "mississippi", "twilight", "pumpkin", "snowflake", "gingerbread"];
let correctWord = wordList[Math.floor((Math.random() * wordList.length))];
let hiddenWord = "_ ".repeat(correctWord.length);

let attempts = 10;
let usedLetters = [];



while (attempts > 0 && hiddenWord.includes("_")){
    alert(
        "Fjala: " + hiddenWord.join(" ") +
        "\nShkronjat e provuara: " + usedLetters.join(", ")
    );
    let guess = prompt("Fut vetem nje shkronje: ").toLowerCase();
    if (guess === ""){
        alert("EMPTY INPUT.");
        continue;
    }
    if (guess.length !== 1){
        alert("Shkruaj vetem nje shkronje! ");
        continue;
    }
    usedLetters.push(guess);

    if (correctWord.includes(guess)){
        for (let i = 0; i < correctWord.length; i++){
            if (correctWord[i] === guess){
                hiddenWord[i] === guess;
            }
        }
        alert("Sakte! Shkronja " + guess + " gjendet ne fjale.")
    }
    else{
        attempts--;
        alert("E pasakte. Humbe nje tentative. Tani i ke vetem " + attempts + " tentativa.")
    }

    if (!hiddenWord.includes("_")){
        alert("Urime! E gjete fjalen: " + correctWord);
    }
    else if (attempts === 0){
        alert("Humbe! Fjala e sakte ishte: " + correctWord);
    }
}