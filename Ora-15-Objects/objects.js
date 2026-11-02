// let person = {
//     emri: "Riana",
//     mbiemri: "Fejzullahu",
//     mosha: 2026 - 2010,
//     vendbanimi: "Lala Land",
// }

// let dog = {
//     name: "Rex",
//     race: "Dalmatian",
//     age: 3,
//     color: "Black and white",
//     tregoRacen: function(){
//         alert(this.race);
//         console.log(this.race);
//     },
// }

// console.log(dog.name);
// console.log(dog.race);
// console.log(dog.age);
// console.log(dog.color);

// dog.isDangerous = false;
// console.log(dog);
// delete dog.color;
// console.log(dog);

// console.log("age" in dog);
// console.log("color" in dog);

// console.log(dog.tregoRacen());



// let person = {
//     name: "Riana",
//     surname: "Fejzullahu",
//     age: 16,
//     location: "Lala Land",
//     hello: function(){
//         console.log("Hello, " + this.name + " " + this.surname)
// },
// }

// person.hello();


// let bookstore = {
//     emri: "Dukagjini",
//     numriTotal: 100,
//     addBooks: function(){
//         this.numriTotal++;
//         console.log(this.numriTotal);
//     },
// }

// bookstore.addBooks();




let dog = {
    name: "Oreo",
    race: "Dachshund",
    age: 4,
    color: "Dark brown",
    energy: 100,
    getEnergy: function(){
        console.log("Energjia ime eshte: " + this.energy);
    },
    bark: function(){
        console.log("Woof woof woof");
        this.energy = this.energy - 25;
    },
    hani: function(){
        console.log("Yummy yummy yummy");
        this.energy = this.energy + 25;
    }
}

dog.bark();
dog.getEnergy();
dog.hani();
dog.getEnergy();