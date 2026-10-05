// // 1.
// console.log("Lojtari u lidh me sukses!");
// console.warn("Paraljmerim: bateria e kontrolluesit eshte nen 20%!");
// console.error("Ruajtja e progresit deshtoi!");


// // 2.
// let emri = "Riana";
// let mosha = 16;
// let eshteStudent = true;
// let adresaEmail;
// let numriTelefonit = null;

// console.log(typeof emri);
// console.log(typeof mosha);
// console.log(typeof eshteStudent);
// console.log(typeof adresaEmail);
// console.log(typeof numriTelefonit);


// // 3.
// let vendetLira = 50;
// console.log("Numri i vendeve te lira: " + vendetLira);
// vendetLira --;
// console.log("Numri i vendeve te lira: " + vendetLira);
// vendetLira --;
// console.log("Numri i vendeve te lira: " + vendetLira);
// vendetLira --;
// console.log("Numri i vendeve te lira: " + vendetLira);


// // 4.
// let pesha = 25;
// if (pesha < 1){
//     console.log("Cmimi i postes eshte falas!");
// }
// else if (pesha >= 1 && pesha <= 5){
//     console.log("Cmimi i postes eshte 3 euro.");
// }
// else if (pesha > 5 && pesha <= 20){
//     console.log("Cmimi i postes eshte 7 euro.");
// }
// else if (pesha > 20){
//     console.log("Cmimi i postes eshte 15 euro.");
// }


// // 5.
// let ditaEJaves = "E merkure";
// switch (ditaEJaves) {
//     case "E hene":
//     case "E marte":
//     case "E merkure":
//     case "E enjte":
//     case "E premte":
//         console.log("Dite pune.");
//         break;
//     case "E shtune":
//     case "E diele":
//         console.log("Fundjave.");
//         break;
//     default:
//         console.log("Inputi qe e keni dhene eshte i panjohur!");
//         break;
// }


// // 6.
// let totalShitje = 0;
// function regjistroShitjen(){
//     totalShitje ++;
//     console.log(totalShitje);
// }

// regjistroShitjen();
// regjistroShitjen();
// regjistroShitjen();


// BONUS
function kontrolloAksesin(mosha, tipiAnetaresise){
    if (mosha >= 18){
        switch (tipiAnetaresise){
            case "standarde":
                return "Akses baze";
            case "premium":
                return "Akses i zgjeruar";
            case "vip":
                return "Akses i plote";
            default:
                return "Tip anëtarësie i panjohur";
        }
    }
    else{
        return "Nuk lejohet - nen moshe.";
    }
}

console.log(kontrolloAksesin(17, "premium"));


function llogaritZbritjen(shuma, dita){
    if (shuma >= 50 && shuma < 100){
        shuma = shuma - 0.05 * shuma;
    }
    else if (shuma >= 100){
        shuma = shuma - 0.1 * shuma;
    }
    switch (dita){
        case "E shtune":
        case "E diele":
            shuma = shuma - 0.05 * shuma;
            break;
        default:
            shuma = shuma;
            break;
    }
    console.log("Shuma perfundimtare: " + shuma);
}

llogaritZbritjen(100, "E shtune");


function llogaritCmimin(mosha, dita){
    let bileta = 500;
    if (mosha < 7 || mosha > 65){
        bileta = bileta - bileta * 0.5;
    }
    else if (mosha >= 7 && mosha <= 17){
        bileta = bileta - bileta * 0.2;
    }
    else if (mosha >= 18 && mosha <= 65){
        bileta = bileta;
    }
    switch (dita){
        case "E enjte":
            bileta = bileta - bileta * 0.1;
            break;
        case "E shtune":
        case "E diele":
            bileta = bileta + bileta * 0.15;
            break;
        default:
            bileta = bileta;
    }
    console.log("Cmimi i biletes: " + bileta);
}