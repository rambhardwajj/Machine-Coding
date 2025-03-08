// this when used inside functions: 
// this will point to global object in case of null and undef
// this will give point to same object in case of non premitive 
// this will give wrapper class in case of premitive 
// this will point to global obj -> 

console.log(this) // context nahi pata reh ta

// this substitution method
function say(){
    console.log(this)
    console.log(global===this)
}
say() 

var a = 10;
this.b = 20; 

console.log(global.a); 
console.log(global.b); 
console.log(this.a);
console.log(this.b);
console.log(this);

const obj = {
    name: "Ram", 
    sayName(){

        console.log(this)
        return `${this.name}`
    }
    
}
var user = "ram";

if (true) {
  var user = "saurav";
  console.log(user);
}

console.log(user);

var user = "ram";
function something() {
  var user = "ankit";
  console.log(user);
}
console.log(user);

const numbers = [10, 20, 5, 40, 30];