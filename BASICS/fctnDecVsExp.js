
// Declared functions are hoisted so they can be called before declaration
greet()

// function Declaration 
function greet(){
    console.log("Hi from declaration")
}


// funciton expression cannot be hoisted and will give error is called before the line of expression
// console.log(add) // error

// function expression
const add = function(a,b){
    console.log("dsfds")
    return a+b  ;
}

const res = add(1,2)

