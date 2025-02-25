function check(val){
    if( val ){
        console.log("tr")
    }else{
        console.log("fal")
    }
}

console.log(check(1))   // true
console.log(check(0))   // false
console.log(check("ram")) // true
console.log(check(""))  // false
console.log(check([])); // true
console.log(check([1,2,3])) // true
