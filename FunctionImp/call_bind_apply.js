let name  ={
    fName: "ram",
    lName: 'bhardwaj',
    printName: function(){
        console.log(this.fName + ' ' + this.lName)
    }
}

name.printName()

let name2  ={
    fName: "sachin",
    lName: 'tendulkar',
}

name.printName.call(name2)