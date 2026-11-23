let countNumber = document.querySelector(".number");

let count = 0;

let btnIncrease = document.querySelector("#btn-increase");
let btnDecrease = document.querySelector("#btn-decrease");
let btnIncreaseTen = document.querySelector("#btn-increase-ten");
let btnDecreaseTen = document.querySelector("#btn-decrease-ten");
let btnReset = document.querySelector("#btn-reset");

function updateCount() {
    countNumber.innerHTML = count;
}

function countUp() {
    count++;
    updateCount();
}

function countDown(){
    count--;
    updateCount();
}

function countByTen(){
    count += 10;
    updateCount();
}

function countByMinusTen(){
    count -= 10;
    updateCount();
}

function reset(){
    count = 0;
    updateCount();
}

btnIncrease.addEventListener("click", countUp);
btnDecrease.addEventListener("click", countDown);
btnIncreaseTen.addEventListener("click", countByTen);
btnDecreaseTen.addEventListener("click", countByMinusTen);
btnReset.addEventListener("click", reset);