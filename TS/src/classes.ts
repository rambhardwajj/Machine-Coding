// interface User{
//     name: string,
//     age: number,
//     id: number,
//     email: number,
//     password: string
// }

// // UpdateProps > Pick & Partials
// type UpdateProps = Pick<User, 'name' | 'age' | 'email' > 
// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdateProps){
//     // db calls
// }



// // ReadOnly
// type Users = {
//     readonly name: string
// }

// const users: Users= {
//     name: 'John'
// }
// users.name = "res" // will complain

// const userss : Readonly<Users> ={
//     name: 'ram'
// }
// userss.name = 'egg' // complain


//Records and Maps
interface User {
    id: string,
    password:string
}

const userMap = new Map<string, User>()

userMap.set('asdfds', { id: 'asf', password: "fasdf"})
userMap.get('asdfds')

// type inference
 