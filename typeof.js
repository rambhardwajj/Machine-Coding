console.log(typeof 100); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof Symbol()); // "symbol"
console.log(typeof null); // "object"
console.log(typeof NaN); // "number"
console.log(typeof 12n); // "bigint"
console.log(typeof class User {}); // "function"


function f(){
    return "dsf"
}
console.log(typeof f)
