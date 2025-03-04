// I should have a functio increment() 
// on clal of the fn it shoudl inc the number and return the currrent count 

function increment(){
    let c = 0;
    return function f(){
        c++;
        return c;
    }
}

const x = increment();
const y = increment();

console.log(x())
console.log(y())
console.log(x())
console.log(x())
console.log(x())
console.log(y())
console.log(y())