// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr[-1])

// const user ={
//     name : 'hitesh', 
//     age: 40, 
//     password: "1234"
// }
// const proxyUser = new Proxy( user, {
//     get(target, prop){
//         console.log(prop)
//         if( prop === 'password'){
//             throw new Error('Access Denied')
//         }
//         return target[prop];
//     }, 
//     set(target, prop ,user){
         
//     }
// });
// console.log(proxyUser.password);


let arr = [1,2,3,4,5,6,7,8,9,10]

function negativeIndex(arr){
    return new Proxy(arr, {
        get(target, prop){
            const index = Number(prop)
            if( index<0){
                return target[target.length + index]
            }
            return target[index];
        },
        set(target, prop, value){
            const index = Number(prop)
            if( index<0){
                target[target.length +index] = value;
            }else{
                target[index] = value;
            }
            return true;
        }
    })
}

newArr  = negativeIndex(arr) // this will return a proxy array
console.log(arr[-1]);
console.log(newArr[-1]);

//this will change the value in both the array as both the array refers to the same object
newArr[-1]= 2343;
console.log(arr);
console.log(newArr);

