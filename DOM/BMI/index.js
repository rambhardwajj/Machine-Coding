const wtRange = document.getElementById('wt');
const htRange = document.getElementById('ht');
const ans = document.getElementById('ans')
const grade = document.getElementById('grad')
const wtval = document.getElementById('wtval')
const htval = document.getElementById('htval')
const btn = document.getElementById('btn')

let wt; let ht;

wtRange.addEventListener('change', () =>{
    ans.innerText = "Your BMI"
    grade.innerText = "Your Grade"
    wt = wtRange.value 
    console.log("weight= " + wt)
    wtval.innerText = "Weight: " + wt;
})
htRange.addEventListener('change', () =>{
    ans.innerText = "Your BMI"
    grade.innerText = "Your Grade"
    ht = htRange.value;
    console.log("height " +ht)
    htval.innerText = "Height: " + ht;
})
btn.addEventListener('click', ()=>{
    let result = calcBmi(Number(wt), Number(ht))
    let gr = calcGrade(Number(result));

    ans.innerText = ans.innerText + " " +  result;
    grade.innerText = grade.innerText + " " + gr;
})

function calcBmi( wt, ht){
    return wt + ht;
}

function calcGrade(res){
    if( res< 100 || res>300) return "Poor"
    return "Good" 
}

