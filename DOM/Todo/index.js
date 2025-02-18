const ulElemnt  = document.getElementById('taskArea');  console.log(ulElemnt)
const addBtn = document.getElementById('addbtn'); console.log(addBtn)
const inp = document.getElementById('inp');  console.log(inp)
const doneArea = document.getElementById('compItems')
const cancelledArea = document.getElementById('cancelled');

addBtn.addEventListener('click', ()=>{
    if (!inp.value.trim()) return; 

    const listEl = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = inp.value;

    const xbtn = document.createElement('button');
    xbtn.innerText = 'X';
    const cancelBtn = document.createElement('button')
    cancelBtn.innerText = 'Cancel'
    const doneBtn = document.createElement('button');
    doneBtn.innerText='Done'
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';


    listEl.appendChild(textSpan);
    listEl.appendChild(xbtn)
    listEl.appendChild(editBtn);
    listEl.appendChild(cancelBtn)
    listEl.appendChild(doneBtn)
    ulElemnt.appendChild(listEl)

    inp.value=''

    xbtn.addEventListener('click', ()=>listEl.remove());

    doneBtn.addEventListener('click', ()=>{
        const compItem = document.createElement('li');
        compItem.textContent = textSpan.textContent; // Only add text
        compItem.classList.add('done-task');
        doneArea.appendChild(compItem);
        listEl.remove();
    })

    cancelBtn.addEventListener('click', ()=>{
        const cancelItem = document.createElement('li');
        cancelItem.textContent = textSpan.textContent; // Only add text
        cancelItem.classList.add('cancel-task');
        cancelledArea.appendChild(cancelItem);
        listEl.remove();
    })

    editBtn.addEventListener('click', () =>{
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = textSpan.textContent;
        const saveBtn = document.createElement('button')
        saveBtn.innerText = 'Save'

        listEl.replaceChild(editInput, textSpan)
        listEl.replaceChild(saveBtn, editBtn);

        saveBtn.addEventListener('click', () => {
            textSpan.textContent = editInput.value;
            listEl.replaceChild(textSpan, editInput);
            listEl.replaceChild(editBtn, saveBtn);
        });
    })
})









