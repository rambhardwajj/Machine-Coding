
// All the functions are first class fucntion but only the fucntions who can play with other fucntion are higher order function.
function abc(number){
    return `I am a function ${number}`
}
function firstClassFunction( fn, number){
    return fn(number) + number;
}

// console.log(firstClassFunction(abc, 4))
 
const greet = function(names){
    return `Hi  ${names}`
}

function execute(fn){
    // console.log(fn());
}
execute(greet)

//Any function that can be assigned to a variable and passed around is a first-class function.


//example of simple higherorder function 
function test(num){
    console.log(num)
    return function(varr){
        return varr + num;
    }
}

const a = test(2)
console.log(a(6))
