console.log("hello from js")
setTimeout(()=> console.log('I am delayed'), 0)
console.log('bye')

// Output
// Helllo from js 
// bye 
// I am delayed

// reason = callStack executes instantly and the setTimeout function is a browser function that starts a timer for 0 sec as soon as the timer ends the 
// function is sent to callback Queue And if the call stack is empty then callback queue sends the function to call stact and it is executed there


// dry run this code to understand callback, callstack and event loops
const obj = {
    name: 'ram',
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}

console.log('Hi')
setTimeout(obj.greet, 2000)
setTimeout(obj.greet.bind(obj), 5*1000)
console.log('bye')

 
// Promises
console.log("hi");
setTimeout(() => console.log("hello after 2 sec"), 2*1000);
Promise.resolve().then( () => console.log('Promise is resolved'))
console.log('bye')


// something weird
// There are 2 queues - callback queue and micro task queue
// promises are stored in microtask queue
// micro task queue is given high priority
console.log("hi");
setTimeout(() => console.log("hello after 2 sec"), 0);
Promise.resolve().then( () => console.log('Promise is resolved'))
setTimeout(() => console.log("hello after 2 sec"), 0);
console.log('bye')


// Starvation
// micro queue is infinitely in action 
// the function on callback is never executed
console.log('hi')
setTimeout(() => console.log("timeout here"), 0)
Promise.resolve().then(() => {
    console.log('1. Promise resolved')
    Promise.resolve().then(() => {
        console.log('2. Promise resolved');
        Promise.resolve().then(()=>{
            console.log('3. promise resolved')
        })
    })
})
console.log('bye')
