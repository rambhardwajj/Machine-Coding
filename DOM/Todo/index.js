const ulElemnt  = document.getElementById('taskArea')
console.log(ulElemnt)

const addBtn = document.getElementById('addbtn');
console.log(addBtn)

const inp = document.getElementById('inp')
console.log(inp)

const doneArea = document.getElementById('compItems')
console.log(doneArea)

addBtn.addEventListener('click', ()=>{
    const listEl = document.createElement('li');
    const xbtn = document.createElement('button');
    xbtn.innerText = 'X'
    const doneBtn = document.createElement('button');
    doneBtn.innerText='✔️'
    listEl.innerText = inp.value 
    ulElemnt.appendChild(listEl)
    listEl.appendChild(xbtn)
    listEl.appendChild(doneBtn)
    inp.value=''

    xbtn.addEventListener('click', ()=>{
        listEl.remove();
    })
    doneBtn.addEventListener('click', ()=>{
        const compItem = document.createElement('li');
        listEl.removeChild(doneBtn)
        listEl.removeChild(xbtn)
        compItem.innerText = listEl.innerText;
        compItem.style.color = 'green'
        doneArea.appendChild(compItem)
        listEl.remove();
    })
})









