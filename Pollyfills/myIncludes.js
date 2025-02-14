
if( !Array.prototype.myIncludes){
    Array.prototype.myIncludes = function(searchElement , startIndex = 0){
        startIndex = startIndex>=0 ? startIndex: Math.max( 0, this.length-Math.abs(startIndex));

        for( let i = startIndex; i< this.length; i++){
            if( this[i] == searchElement || ( Number.isNaN(this[i]) && Number.isNaN(searchElement)) ){
                return true;
            }
            // Or 
            // if (Object.is(this[i], searchElement)) {
            //     return true;
            // }
        }
        return false;
    }
}

console.log([1, 2, 3].myIncludes(2)); // true
console.log([1, 2, 3].myIncludes(4)); // false
console.log([NaN, 2, 3].myIncludes(NaN)); // true
console.log([1, 2, 3].myIncludes(2, -1)); // false

const arr = [10, 20, 30, 40, 50];
console.log(arr.includes(30, -2)); // false (starts searching from index 3)