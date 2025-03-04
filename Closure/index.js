
const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', ()=>{
    let color = inp.value 
    function buttonGenerator(color){
        return function (){
            let newButton = document.createElement('button')
            newButton.innerText = color
            newButton.addEventListener('click', ()=>{
                document.body.style.backgroundColor = color;
            })
            container.appendChild(newButton)
        }
    }
    let addButton = buttonGenerator(color)
    addButton();
})

some closures concepts 

