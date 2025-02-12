// Polyfill Question: Implement Array.prototype.filter
// Problem Statement:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Your Task:
// Write a polyfill for Array.prototype.filter in JavaScript.

const a = [1,4,5,6,7,8,9,];
Array.prototype.myFilter = function(callback ){
    const res = [];
    for(let i =0 ;i< this.length; i++){
        if( callback(this[i] )){
            res.push(a[i]);
        }
    }
    return res;
}

const filteredArr = a.myFilter(num => num % 2 === 0);
console.log(filteredArr); // [2, 4]