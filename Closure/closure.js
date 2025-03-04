function adder(num){
    function add(b){
        console.log(num + b);
    }
    return add;
}

const addTob = adder(5)
addTob(3)

function counter(){
    let counter = 1;

    function inc(){
        console.log(counter++)
    }
    return inc;
}

const closureFn = counter()
closureFn();
closureFn();

