console.log('Hi')
const data = fetch('https://api.freeapi.app/api/v1/public/randaomProducts')

console.log('Dat is ', data)

// .then is the property of then, then is in the prototype of Promise
// then says giveme a call backfucntio and jab bhi value hogi toh mai callback fucntion ko data deke call krdunga

// // Promise.prototype.then = function(cb) {
//  jab bhi value available hogi cb(value) krdunga 
// }

data.then((res) => console.log ('Data Agya', res)) // micro task queue -> call stack -> 
console.log('Bye')

// Hi
// Dat is  Promise { <pending> }
// Bye
// Data Agya Response {
//   status: 200,
//   statusText: 'OK',
//   headers: Headers { } 
// }


// Promises ki different stages
// Pending, Fulfill, Reject 


// .then(cb) calls the cb function only when the status of promise is fullfilled
// .catch( fn ) calls when promise is rejected
// .finally( fn ) calls every time

// JS never and not even now dont have capabilities to do network call

