 console.log("Hello From Node.js !");


// //  1. Write an arrow function which returns the product of two numbers

// //1
const multiply = (a,b) => {

    return a * b;
}
console.log(multiply(12,5));

// // 2
const multiply1 = (a,b) => a*b

console.log(multiply1(10,5));

// //  2. Watch video 6 as well and create a student object

// //1
const student = {
   name: "Pankaj",
   age: 22,
   greet: function() {
    console.log(" Hi, I am " + this.name)
   }
}
student.greet();

// //2 
const student1 = {
    name: "Sanjay",
    age: 22,
    greet() {
     console.log(" Hi, I am " + this.name)
    }
 }
 student1.greet();

// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

var array= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(array);

var ans = array.map((value , index) =>{
if (array[index]== ' '){
    array[index]='empty string';
}
console.log(array[index])
})
console.log(array)

//spread opertor
 // this operator can be used as to copy the properties of a array or object into new .
const hobbies = ['reading','swimming','running']
let newhobby = [...hobbies]
console.log(newhobby);

//rest opertor
// rest opertor is works like the spread operator , it can be used as to merge multiple argument into a function then we use it rest operator, this rest operator looks like spread operator but it will differ where we use it.

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4,5));

//How is hobbies const and it still doesnt error out when we add new elements to the array as in the video.
// here we just copy the properties of const variable not the original,function or object, therefore we dont get error