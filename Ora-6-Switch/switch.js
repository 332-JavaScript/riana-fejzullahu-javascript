let dita = "E marte";

if (dita === "E hene"){
    console.log("Fillim jave");
}
else if (dita === "E marte"){
    console.log("Dita e dyte");
}
else if (dita === "E merkure"){
    console.log("Mesi i javes");
}
else{
    console.log("Dite tjeter");
}

switch (dita){
    case "E hene":
    case "E marte":
    case "E merkure":
    case "E enjte":
    case "E premte":
        console.log("Dite pune");
        break;
    case "E shtune":
    case "E diele":
        console.log("Fundjave");
        break;
    default:
        console.log("Nuk eshte dite e javes.");
}


let muaji = "Mars";

switch (muaji){
    case "Janar":
        console.log("Muaji 1");
        break;
    case "Shkurt":
        console.log("Muaji 2");
        break;
    case "Mars":
        console.log("Muaji 3");
        break;
    case "Pril":
        console.log("Muaji 4");
        break;
    case "Maj":
        console.log("Muaji 5");
        break;
    case "Qershor":
        console.log("Muaji 6");
        break;
    default:
        console.log("Muaj i panjohur!");
}