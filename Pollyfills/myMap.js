// Implement a Polyfill for Array.prototype.map
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// Your Task:
// Write a polyfill for Array.prototype.map in JavaScript.




const arr = [1, 2, 3];

Array.prototype.myMap = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }
    const res = [];
    for(let i =0 ;i< this.length; i++){
        res[i] =  callback( this[i]);
    }
    return res;
};

const newArr = arr.myMap(num => num * 2);
console.log(newArr); // [2, 4, 6]