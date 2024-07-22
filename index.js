// console.log(typeof Symbol("Ram"));
// How to Display JavaScript Objects?
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
//   console.log("--person object---",person);
//   Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
//   console.log(person.name + "," + person.age + "," + person.city);
// Displaying the Object Properties in a Loop
// let text = "";
// for (let x in person) {
//     console.log("--x---",x)
// //   text += person.x + " ";// will not work output:undefined undefined undefined
//   text += person[x] + " ";};
// console.log(text)

// Displaying the Object using Object.values()
//Using Object.entries()
// const fruits = {Bananas:300, Oranges:200, Apples:500};
// console.log(Object.entries(fruits));
// let text = "";
// for (let [key, value] of Object.entries(fruits)) {
//   text += key + ": " + value + ", ";
// }
// console.log(text)
// Displaying the Object using JSON.stringify():
//JavaScript objects can be converted to a string with JSON method JSON.stringify().
// Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   // Stringify Object
//   let myString = JSON.stringify(person);
//   console.log("JSON.stringigy method",JSON.stringify());
//   console.log(myString)

// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.
// Object Type Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Note:
// In the constructor function, this has no value.

// The value of this will become the new object when a new object is created.
// Now we can use new Person() to create many new Person objects:

// const myFather = new Person("John", "Doe", 50, "blue");
// console.log("myFather new Person object----",myFather)

// console.log("firstName--", myFather.firstName + " " + myFather.lastName + " " + myFather.age)

// const myMother = new Person("Sally", "Rally", 48, "green");
// console.log("firstName--", myMother.firstName + " " + myMother.lastName + " " + myMother.age)

// const mySister = new Person("Anna", "Rally", 18, "green");
// console.log("firstName--", mySister.firstName + " " + mySister.lastName + " " + mySister.age)

// const mySelf = new Person("Johnny", "Rally", 22, "green");
// console.log("firstName--", mySelf.firstName + " " + mySelf.lastName + " " + mySelf.age)

console.log("Date=======", Date.now());
console.log("Date=======", Date());
console.log("Date=======", new Date());
const date = new Date()
console.log("date convert to string", date.toString())
console.log("Date=======", date.getDate());
console.log("Date=======", date.getDay());
console.log("Date=======", date.getFullYear());
console.log("Date=======", date.getHours());
console.log("Date=======", date.getMonth());
console.log("Today date is: ", date.getDate()+"/"+date.getMonth() +"/"+ date.getFullYear())