const airline = "Akademia jCoders";
console.log(airline.indexOf("jCoders"));
console.log(airline.indexOf("Riana"));

const airline1 = "Akademia jCoders jCoders";
console.log(airline1.lastIndexOf("jCoders"));

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing Akademia jCoders elit. In leo arcu, ornare vel cursus a, hendrerit quis neque. Etiam interdum lectus ac nibh egestas gravida. Fusce eu pellentesque metus.";

console.log(str.indexOf("Akademia jCoders"));
console.log(str.lastIndexOf("Akademia jCoders"));
console.log(str.indexOf("Akademia"));

const airline2 = "Akademia jCoders jCoders";
console.log(airline2.slice(0, 8));
console.log(airline2.slice(9, 16));

console.log(str.slice(51, 67));

const jCoders = "Akademia jCoders jCoders";
let result = jCoders.toLowerCase();
console.log(result);

const jCoders1 = "Akademia jCoders jCoders";
let result1 = jCoders1.toUpperCase();
console.log(result1)


let name1 = str.slice(51, 67);
let upper = name1.toUpperCase();
let lower = name1.toLowerCase();
console.log(upper);
console.log(lower);

const priceGB = "288,97%";
const priceUS = priceGB.replace("%", "$").replace(",", ".");
console.log(priceUS);

const str1 = "JS is an interpreted language!";
const str1_replace = str1.replace("JS", "JavaScript");
console.log(str1_replace);


let value1 = "Akademia";
let value2 = "jCoders";
let result67 = value1.concat(value2);
let value3 = "Riana";
console.log(result67);
let result_67_2 = result67.concat(value3);
console.log(result_67_2);