// Machine Coding Problem: Rate Limiter
// You need to implement a Rate Limiter in JavaScript. The rate limiter should allow a certain number of requests per user in a given time window.

// Requirements:
// Implement a function RateLimiter(limit, timeWindow) that initializes the rate limiter.
// Implement a method allowRequest(userId) that returns true if the user can make a request, otherwise false.
// A user can make at most limit requests in timeWindow milliseconds.
// Use efficient data structures to optimize for performance.
// Assume the function allowRequest(userId) will be called multiple times with different users.
// Example:

// const limiter = new RateLimiter(3, 10000); // Allow max 3 requests per 10 sec

// console.log(limiter.allowRequest("user1")); // true
// console.log(limiter.allowRequest("user1")); // true
// console.log(limiter.allowRequest("user1")); // true
// console.log(limiter.allowRequest("user1")); // false (exceeds limit)
// Expectations:
// Code should be modular and clean.
// Use OOP principles or functional programming as appropriate.
// Optimize time and space complexity.
// No external libraries (use only vanilla JavaScript).

class RateLimiter{
    constructor( limit, timeWindow){
        this.limit = limit;
        this.timeWindow = timeWindow;
        this.request = new Map();
    }

    allowRequest(userId) {
        if( !this.request.has(userId)){
            this.request.set(userId, []);
        }

        const currTime = Date.now();
        const timeStamps = this.request.get(userId);

        while(timeStamps.length>0 && currTime - timeStamps[0] > this.timeWindow ){
            timeStamps.shift();
        }

        if( timeStamps.length < this.limit){
            timeStamps.push( currTime )
            return true;
        }
        return false;
    }
}

const limiter = new RateLimiter(3, 3000);
console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // false

setTimeout(() => {
    console.log(limiter.allowRequest("user1")); // true (after time window resets)
}, 11000);