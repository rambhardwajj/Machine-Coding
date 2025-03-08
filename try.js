// const num= [ 1,2,3,4,5]

// const sum = num.reduce( (acc , currVal)=>{
//     // console.log(acc , currVal)
//     return acc + currVal
// })
// // console.log(sum)


// const bag = [ 
//     { item: "book", price: 200},
//     { item: "box", price: 5}
// ]
// const totalPrice = bag.reduce((acc, obj )=>{
//     return acc + obj.price
// },0)

// console.log(totalPrice)



// const pipe =
//   (...functions) =>
//   (initialValue) =>
//     functions.reduce((acc, fn) => {
//         console.log( initialValue)
//         return fn(acc)
//     } , initialValue);


    
//     // Building blocks to use for composition
//     const double = (x) => 2 * x;
//     const triple = (x) => 3 * x;
//     const quadruple = (x) => 4 * x;
    
//     // Composed functions for multiplication of specific values
//     // const multiply6 = pipe(double, triple);
//     // const multiply9 = pipe(triple, triple);
//     // const multiply16 = pipe(quadruple, quadruple);
//     // const multiply24 = pipe(double, triple, quadruple);
    
//     // // Usage
//     //  const a = multiply6(6); // 36
//     // multiply9(9); // 81
//     // multiply16(16); // 256
//     // multiply24(10); // 240
    
//     pipe(double, triple)(6)

// let a = [2,4,6,8,9]
// let tar = 8
// let l =0, r = a.length-1;
// function bS(a ,l, r, tar){
//     if( l>r) return -1;

//     console.log("l= " , l , 'r= ' ,r)
//     let mid = Math.floor((l+r)/2);
//     let aaaa =0;
//     if( a[mid]==tar) return mid;
//     else if( a[mid]< tar){
//         return  bS(a, mid+1, r, tar);
//     }else{
//           bS(a, l, mid-1, tar);
//     }
    
// }

// console.log(bS(a, l, r, tar));


// class ABC{
// }
// console.log( typeof ABC)

// const numbers = [10, 20, 5, 40, 30];

// console.log(Math.max.call( null, ...numbers ))


//---------------------------------
// const obj = {
//     name: "CodeMaster",
//     greet: function () {
//       console.log(`Hello, ${this.name}!`); // CodeMaster
//       setTimeout( ()=> {
//             console.log(`Timeout: Hello, ${this.name}!`); // undef
//       }, 1000);
//     },
//   };
  
//   obj.greet();
   
// -------------------------------------------

// var length = 10;

// function callback() {
//     console.log(this)
//   console.log(this.length);
// }

// const obj = {
//   length: 5,
//   method: function () {
//     let arr = [1, 2, 3];
//     arr.forEach(callback);
//   },
// };

// obj.method();

// callback()


const person = {
  name: "Bob",
  greet: function (greeting) {
      console.log(`${greeting}, I am ${this.name}`);
  },
};

const anotherPerson = { name: "Charlie" };

person.greet.call(anotherPerson, "Hello");
person.greet.apply(anotherPerson, ["Hi"]);
const boundFn = person.greet.bind(anotherPerson, "Hey");
boundFn();

