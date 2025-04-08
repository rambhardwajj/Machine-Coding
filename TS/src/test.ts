

type People = {
    name: string,
    age: number,
    greet: () => string
}

const person: People = {
    name: 'ram',
    age: 21,
    greet: () =>{
        return "hi"
    }
}
