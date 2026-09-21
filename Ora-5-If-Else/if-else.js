let mosha = 19;

if (mosha >= 18){
    console.log("Je i rritur!");
}

let rezultati = (mosha >= 18) ? "Je i rritur" : "Je i mitur";

if (mosha >= 18){
    console.log("Je i rritur!");
}else{
    console.log("Je i mitur!");
}

let nota = 5;
if (nota >= 3){
    console.log("Nxenes i mire");
}
else{
    console.log("Nxenes mesatar");
}

let notaMesatare = (nota >= 3) ? "Nxenes i mire" : "Nxenes mesatar";
// 0-18 Je femije
// 18-65 Je i rritur
// 65+ Je i moshuar

if (mosha < 0){
    console.log("Ende nuk keni lindur.");
}else if (mosha >= 0 && mosha <= 18){
    console.log("Je femije.");
}else if (mosha >= 18 && mosha <= 65){
    console.log("Je i rritur");
}else{
    console.log("Je i moshuar");
}



let piket = Number(prompt("Sa pike i keni marre ne test?"));


if (piket < 0 && piket > 100){
    console.log("Ju lutem vendosni nje numer valid te pikeve.");
}
else if (piket >= 0 && piket <= 42){
    console.log("Nota juaj eshte 1.");
}
else if (piket >= 43 && piket <= 55){
    console.log("Nota juaj eshte 2.");
}
else if (piket >= 56 && piket <= 69){
    console.log("Nota juaj eshte 3.");
}
else if (piket >= 70 && piket <= 84){
    console.log("Nota juaj eshte 4.");
}
else{
    console.log("Nota juaj eshte 5.")
}


let BMI = masa / gjatesia ** 2
if (BMI < 18.5){
    console.log("Nenpeshe");
}
else if (BMI >= 18.5 && BMI <= 25){
    console.log("Peshe normale");
}
else if (BMI > 25 && BMI <= 30){
    console.log("Mbipeshe");
}
else if(BMI > 30){
    console.log("Obezitet");
}