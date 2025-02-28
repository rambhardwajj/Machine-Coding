Array.prototype.myMap = function(callback){
    const newArr = [];
    for( let i=0 ;i<this.length; i++){
        newArr.push(callback(this[i]))
    }
    return newArr;
}

arr = [1,3,5,6]

a=arr.myMap(x => x+2);
console.log(arr)
console.log(a)

