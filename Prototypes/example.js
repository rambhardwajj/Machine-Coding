class Person {
    constructor(name) {
        this.name = name;
    }
}

const person1 = new Person("Amit");

console.log(person1.name);  // ✅ Step 1: Found inside object → Output: Amit
console.log(person1.age);   // ❌ Not found → Moves to Step 2

// Adding age in prototype
Person.prototype.age = 30;
console.log(person1.age);   // ✅ Step 2: Found in prototype → Output: 30

console.log(person1.toString()); 
// ✅ Step 3: Not in object, not in Person.prototype, found in Object.prototype → Output: [object Object]

console.log(person1.someRandomProperty);  
// ❌ Step 4: Not found in object, not in prototype, not in Object.prototype → Output: undefined
