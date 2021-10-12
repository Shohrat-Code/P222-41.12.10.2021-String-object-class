// function result(Age) {
//     console.log(`Your age is ${Age}`)
// }

// function result2(Age) {
//     console.log(`Come on, your age is already ${Age}?`)
// }



//First
// function test() {
//     let age = prompt("Enter your age:");
//     result(age);
// }
// test();


//Second
// function test2(callback) {
//     let age = prompt("Enter your age:");
//     callback(age);
// }

// test2(result);
// test2(result2);

// let str = "     Lorem Ipsum is simply dummy text of the printing and typesetting industry.    ";

// console.log(str.slice(3, -7));
// console.log(str.substring(15, 0));
// console.log(str.substr(0, 14));
// console.log(str);
// console.log(str.trim());

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let ages = [15, 7, 48, 3, 12, 93, 47, 34, 52];
// // ages.sort(compareNumeric);
// ages.sort((a, b) => a - b);

// console.log(ages);


/* Object-Class */
// let Person = {
//     name: "Rasim",
//     surname: "Abbasov",
//     age: 25
// };

// console.log(Person.surname);

// function Person(Name = "", Surname = "", Height = 0, Age = 0) {
//     this.name = Name;
//     this.surname = Surname;
//     this.height = Height;
//     this.age = Age;
// }

// let rasim = new Person("Rasim", "Abbasov", 1.78, 25);
// let qasim = new Person("Qasim", "Quliyev", 1.55, 35);

// let people = [rasim, qasim];
// console.log(typeof(rasim));

// console.log(`${rasim.name} ${rasim.surname} - Height: ${rasim.height}, Age: ${rasim.age} `);
// console.log(`${qasim.name} ${qasim.surname} - Height: ${qasim.height}, Age: ${qasim.age} `);

// people.forEach(person => console.log(person.name));
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name)
// }

// for (const key in people) {
//     console.log(people[key].name);
// }

// for (const person of people) {
//     console.log(person.name);
// }

// class Person {
//     minHeight = 50;
//     // age;

//     constructor(Name, Surname, Age) {
//         this.name = Name,
//             this.surname = Surname,
//             this.age = Age
//     }

//     get age() {
//         return this._age
//     }
//     set age(value) {
//         if (value > 0 && value < 168) {
//             this._age = value;
//         }
//     }

//     Fullname() {
//         return this.Name + " " + this.Surname;
//     }

//     Fullinfo() {
//         return this.Name + " " + this.Surname + "-" + this.age;
//     }
// }

// let toofiq = new Person("Toofiq", "Bahramov");

// console.log(toofiq.name);

// toofiq.minHeight = 12;
// toofiq.age = 654;
// console.log(toofiq.age);

// class Vehicle {
//     constructor(Brand, Model, Color) {
//         this.brand = Brand,
//             this.model = Model,
//             this.color = Color
//     }
// }

// class Car extends Vehicle {
//     constructor(Brand, Model, Color, Speed, Year) {
//         super(Brand, Model, Color),
//             this.speed = Speed,
//             this.year = Year
//     }
// }

// class Bycicle extends Vehicle {
//     constructor(Brand, Model, Color, WheelSize) {
//         super(Brand, Model, Color),
//             this.wheelSize = WheelSize
//     }
// }

// let audi = new Car("Audi", "RS7 Sportback", "Dark blue", 330, 2021);

// console.log(audi.speed);


// class Profit {
//     constructor(CostPrice, SellPrice, Inventory) {
//         this.costPrice = CostPrice,
//             this.sellPrice = SellPrice,
//             this.inventory = Inventory
//     }
// }


// let getProfit = (obj) => {
//     return Math.round((obj.sellPrice - obj.costPrice) * obj.inventory);
// }

// let profit1 = new Profit(15, 20, 100);
// let profit2 = new Profit(651, 698, 100);
// console.log(getProfit(profit1));
// console.log(getProfit(profit2));


// class Range {
//     constructor(Min, Max) {
//         this.min = Min,
//             this.max = Max
//     }
// }

// let isInRange = (number, obj) => {
//     if (number >= obj.min && number <= obj.max) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let range1 = new Range(4, 35);

// console.log(isInRange(15, range1));