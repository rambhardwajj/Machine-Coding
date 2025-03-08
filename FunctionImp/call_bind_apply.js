// let name  ={
//     fName: "ram",
//     lName: 'bhardwaj',
//     printName: function(){
//         console.log(this.fName + ' ' + this.lName)
//     }
// }

// name.printName()

// let name2  ={
//     fName: "sachin",
//     lName: 'tendulkar',
// }

// name.printName.call(name2)

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
//     return Promise.resolve();
// }).then(() => {
//     console.log("Promise 2");
// });

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);

// console.log("End");


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
// console.log(i)


// for (var i = 0; i < 3; i++) {
//     console.log("Loop iteration:", i); 
//     setTimeout(() => {
//         console.log("Inside setTimeout, i:", i);
//     }, 1000);
// }

// console.log("Final value of i after loop:", i); 

// let i

// for ( i = 0; i < 3; i++) {
//     console.log("Loop iteration:", i); 
//     setTimeout(() => {
//         console.log("Inside setTimeout, i:", i);
//     }, 1000);
// }

// console.log("Final value of i after loop:", i); 


// for ( var i = 0; i < 3; i++) {
//     console.log("Loop iteration:", i); 
//     setTimeout((i) => {
//         console.log("Inside setTimeout, i:", i);
//     }, 1000)(i);
// }

// console.log("Final value of i after loop:", i); 

// let ref = { value: 0 };

// for (var i = 0; i < 3; i++) {
//     ref.value = i;
//     setTimeout(() => console.log(ref.value), 1000);
// }


// const one = () => Promise.resolve("one")
// async function test() {
//     console.log("Inside test function")
//     const result = await one();
//     console.log('fds')
//     console.log(result)
//     console.log('baddme')
// }

// console.log("Before Calling test funciton");
// test();
// console.log("After Calling test function")


// console.log("Script Start")

// setTimeout(function(){
//     console.log("set Timeout")
// },0);

// new Promise ((resolve,reject)=>{
//     console.log("Promise constructor");
//     resolve("Promise resolved")
// }).then(function(res){
//     console.log(res)
// })

// async function asyncFunc() {
//     console.log("asyncFunc Start");

//     await new Promise((resolve)=>{
//         console.log("Promise inside asyncFunc");
//         resolve("Async/await resolved")
//     })
//     console.log("asyncFunc end")
// }

// asyncFunc();

// console.log("Script end") 

