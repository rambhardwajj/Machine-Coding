let globalVar = "i am global"

function modifiedGlobal(){
    globalVar = "i am modified"
    let bloackScopedVar = "i am b-scoped"
    console.log(bloackScopedVar)
}

modifiedGlobal()
