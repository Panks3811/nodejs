console.log("Hello From Node.js !");


//  1. Write an arrow function which returns the product of two numbers

//1
const multiply = (a,b) => {

    return a * b;
}
console.log(multiply(12,5));

// 2
const multiply1 = (a,b) => a*b

console.log(multiply1(12,5));

//  2. Watch video 6 as well and create a student object

//1
const student = {
   name: "Pankaj",
   age: 22,
   greet: function() {
    console.log(" Hi, I am " + this.name)
   }
}
student.greet();

//2 
const student1 = {
    name: "Sanjay",
    age: 22,
    greet() {
     console.log(" Hi, I am " + this.name)
    }
 }
 student1.greet();