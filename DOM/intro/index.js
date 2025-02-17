// function changeBG(color){
//     document.body.style.backgroundColor = color 
// }

// const darkButton = document.getElementById('dark-mode-btn');

// console.log(darkButton)

// darkButton.addEventListener('click', ()=>{
//     console.log('i got cicked')
// })


const themeBtn = document.getElementById('theme-btn');
console.log(themeBtn)

themeBtn.addEventListener('click', ()=>{
    let color = document.body.style.backgroundColor;
    if( color == 'black'){
        document.body.style.backgroundColor = 'white'
        themeBtn.innerText = 'Dark Mode'
    }else{
        document.body.style.backgroundColor = 'black'
        themeBtn.innerText = 'Light Mode'
    }

})