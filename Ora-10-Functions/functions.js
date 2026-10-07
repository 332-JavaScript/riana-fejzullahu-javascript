function hello(){
    console.log("Hello everyone!");
}

hello();
hello();
hello();

function prodhimi(a, b){
    let prodhimi = a * b;
    console.log(prodhimi);
}

prodhimi(6, 7);
prodhimi(6, 8);
prodhimi(8, 7);


function info(emri, mbiemri, mosha){
    console.log("Une jam " + emri + " " + mbiemri + " dhe jam " + mosha + " vjecare.");
}

info("Riana", "Fejzullahu", 16);
info("Filan", "Fisteku", 67);
info("Jane", "Doe", 24);
info("John", "Doe", 75);


function mesatarja(a, b, c){
    let avg = (a + b + c) / 3;
    console.log(avg);
}

mesatarja(34, 345, 5686);
mesatarja(7567, 45, 233);
mesatarja(34557, 213, 90);

function mbledhja1(a, b){
    let shuma = a + b;
    return shuma;
}

let shuma1 = mbledhja1(3, 4);

// console.log(shuma);
console.log(shuma1);


// Function Declaration
function pershendet(emri){
    return "Pershendetje " + emri;
}
console.log(pershendet("Riana"));

// Function Expression
const pershendetje = function(emri){
    return "Pershendetje " + emri;
}

console.log(pershendetje("Riana"));

// Arrow Function

const sum = (a, b) => a + b;

function product1(a, b, c){
    let product = a * b * c;
    return product;
}

const product2 = function(a, b, c){
    let product = a * b * c;
    return product;
}

const product3 = (a, b, c) => a * b * c;

console.log(product1(2, 3, 4));
console.log(product2(5, 6, 7));
console.log(product3(8, 9, 10));