function abc(number){
    return `I am a function ${number}`
}
function firstClassFunction( fn, number){
    return fn(number) + number;
}

console.log(firstClassFunction(abc, 4))