function greet(user:{
    fName : string,
    age: number
}){
    console.log(user)
}

// let UserType= {
//     fName: string,
//     age: number
// }

// // object ko type ki tarah use nahi kr skte
// function greet(user: UserType){

// }


type UserTypee = {
    fName : string,
    lastName: string,
    age: number
}

interface UserType  {
    fName : string,
    lastName: string,
    age: number
}

function greet(user:UserType){
    console.log(user)
}

let user : UserType = {
    fName: 'ram',
    lastName: 'bhardwaj',
    age: 23
}
