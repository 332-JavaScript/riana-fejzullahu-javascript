let mosha = 19;

if (mosha >= 18){
    console.log("Je i rritur!");
}


if (mosha >= 18){
    console.log("Je i rritur!");
}else{
    console.log("Je i mitur!");
}


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