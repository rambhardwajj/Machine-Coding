// Topic -> Global execution context 


console.log("Age is ", age)
const age = 25
// Error - cannot access age before initializing
// __________________________________________________

test()
function test(){
    console.log(" aim an inside")
}
// this will work
//__________________________________________________


console.log('Age is ', agee);
var agee;
// agee is undefined
//-----------

ageee = 3000
console.log('Age is ', ageee)
var ageee = 34;
// Age is 3000
//------------

ageeee = 3000
console.log('Age is ', ageeee)
let ageeee = 34;
// Error 



// When we run a code then there is a global execution context is created 
// there are 2 phases =>  1. memory,  2. Code phase 
// all the function and the variables are loaded in memory phase and all the value of fun and var is undefined in memory phase 
// Code phase will run the code and find the var in memory phase. And code phase will update the value of varaibles

console.log('i am ', aggee);
var aggee = 23
console.log('i am ', aggee)
// i am undefined
// i am 23

// This concept is called as Hoisting 
test()
console.log('age is' ,aggeee)
var aggeee = 25;

// function ki poori body hoist hoti hai 
test = function(){
    console.log('testing')
};
console.log('age is ', age)

//________________________________________

// Temporal dead zone in let and const
// let and const are hoised but due to temporal dead zone they are not accessed 
