Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    // Get the array reference
    const arr = this;
    const length = arr.length;

    if (length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is undefined, use the first element as accumulator
    if (accumulator === undefined) {
        while (startIndex < length && !(startIndex in arr)) {
            startIndex++; // Skip empty slots in sparse arrays
        }
        accumulator = arr[startIndex++];
    }

    for (let i = startIndex; i < length; i++) {
        if (i in arr) { // Skip empty slots in sparse arrays
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }

    return accumulator;
};

// Example Usage:
const arr = [1, 2, 3, 4];

const sum = arr.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 10

const product = arr.myReduce((acc, num) => acc * num, 1);
console.log(product); // 24
