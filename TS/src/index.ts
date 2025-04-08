
function greet(namee: string):void{
    console.log("hello",namee)
}
greet("ram")
// greet(1)

function add(a:number, b:number): number{
    return a+b
}
add(2,4)


function delayedCall( fn: () => number): void{
    setTimeout( fn, 1000)
}
delayedCall(()=>{
    console.log('ram')
    return 1
})

