// this is used for telling Context
let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

let person2 = {
    name: "hitesh"
}

person1.greet.call(person2)