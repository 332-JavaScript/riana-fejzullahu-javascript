let fruits = ["Apple", "Orange", "Kiwi", "Peach"];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[5]);
fruits[1] = "Cherry";
console.log(fruits);

console.log("Array 'fruits' permbane " + fruits.length, "elemente");

fruits[2] = "Grape";
fruits[4] = "Raspberry";
fruits[0] = "Blueberry";
console.log(fruits);
fruits[6] = "Watermelon";
console.log(fruits);

let years = [1990, 1967, 2000, 2013, 2014, 2010, 2015];

function calcAge(birthYear){
    return 2026 - birthYear;
}


for (let i = 0; i < years.length; i ++){
    console.log(calcAge(years[i]));
}
