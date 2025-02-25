let inventory  = [ 
    { name: "A", stock: 30},
    { name: "B", stock: 120},
    { name: "C", stock: 45},
    { name: "D", stock: 70}
]

let lowStockItems = inventory.filter( (x) => {
    return x.stock < 50
})

// _______________________________________________________

let userActivity = [
    {user: 'A', c : 45},
    {user: 'B', c : 55},
    {user: 'C', c : 33},
]

// reduce mai first parameter accumulator hai and second parameter array per traverse krta hua element hai  
let mostActiveUser = userActivity.reduce((maxUser , user) => (
    user.c > maxUser.c ? user:maxUser
));

console.log(mostActiveUser);
