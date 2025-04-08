
type user ={
    name: string,
    age: number,
}
type student ={
   age: number,
   id: number
}

type person = student & user ;

let aa : person = {
   age: 21,
   id: 2121,
   city: "huhuh",
   name: "taste"
}

