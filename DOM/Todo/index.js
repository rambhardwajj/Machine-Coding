const ulElemnt  = document.getElementById('taskArea')
console.log(ulElemnt)

const addBtn = document.getElementById('addbtn');
console.log(addBtn)

const inp = document.getElementById('inp')
console.log(inp)

const doneArea = document.getElementById('compItems')
const cancelledArea = document.getElementById('cancelled');


addBtn.addEventListener('click', ()=>{
    const listEl = document.createElement('li');

    const xbtn = document.createElement('button');
    xbtn.innerText = 'X'
    const cancelBtn = document.createElement('button')
    cancelBtn.innerText = 'Cancel'
    const doneBtn = document.createElement('button');
    doneBtn.innerText='Done'

    listEl.innerText = inp.value 

    ulElemnt.appendChild(listEl)

    listEl.appendChild(xbtn)
    listEl.appendChild(cancelBtn)
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

    cancelBtn.addEventListener('click', ()=>{
        const cancelItem = document.createElement('li');
        cancelItem.innerText = listEl.innerText;
        cancelItem.style.color = 'red'
        cancelledArea.appendChild(cancelItem);
        listEl.remove();
    })
})









