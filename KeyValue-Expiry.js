// Problem Statement:
// You need to implement an in-memory key-value store in JavaScript that supports the following operations:

// set(key, value, ttl): Stores a key-value pair with an optional time-to-live (TTL) in milliseconds.
// get(key): Retrieves the value of the key if it exists and hasn't expired.
// delete(key): Removes the key from the store.
// count(): Returns the number of active keys in the store (excluding expired ones).
// Requirements:
// Keys should expire automatically after the TTL expires.
// If no TTL is provided, the key should persist indefinitely.
// Optimize for fast retrieval and expiry checks.
// Use only JavaScript, no external libraries.
// Ensure that count() does not include expired keys.

// Example Usage:



class KeyValueStore{
    constructor( ){
        this.store = new Map();
    }

    set(key, value, ttl=null){
        const expiry = ttl? Date.now() + ttl: null;
        this.store.set( key, {value, expiry});
    }

    get( key ){
        if( this.store.has(key)){
            const { value, expiry} = this.store.get(key);
            if( expiry !== null && expiry <  Date.now()){
                this.store.delete(key);
                return null;
            }
            return value;
        }else 
            return null;
    }

    delete(key){
        this.store.delete(key);
    }

    count(){
        let validKey = 0;
        if( this.store.length >0){
            for( const [key, {expiry }] of this.store ){
                if( expiry===null || expiry > Date.now()){
                    validKey++;
                }else{
                    this.store.delete(key);
                }
            }
        }
        return validKey;
    }
}


const store = new KeyValueStore();

store.set("user1", "John", 5000); // Key expires in 5 sec
console.log(store.get("user1")); // "John"

setTimeout(() => {
    console.log(store.get("user1")); // null (expired)
}, 6000);

store.set("user2", "Alice");
console.log(store.get("user2")); // "Alice"

store.delete("user2");
console.log(store.get("user2")); // null

console.log(store.count()); // Should return active keys count