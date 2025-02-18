const displayArea = document.getElementById('inpArea');
// console.log(displayArea)
const buttons = document.querySelectorAll(".grid-button")
// console.log(buttons)


function isNumberString(str) {
    return !isNaN(str) && str.trim() !== "";
}
function getRes( a, b , op){
    // console.log("getRes " + a,b,op)
    switch(op){
        case '+': return a+b; 
        case '-': return a-b; 
        case '*': return a*b; 
        case '/': return (b!==0)? a/b:undefined;
    }
}

buttons.forEach(element => {
    element.addEventListener('click', ()=>{
        let val = element.value;
        if( val!=='Clr' && val!=='Del' && val!=='=' ){
            if(val=='+' || val=='-' || val=='/' || val=='*' && displayArea.value.length>0){
                let lastChar =  displayArea.value[displayArea.value.length-1];
                if(lastChar=='+'||lastChar=='-'||lastChar=='*'||lastChar=='/'){
                    console.log(lastChar);
                    displayArea.value = displayArea.value.slice(0,-1);
                }
            }
            displayArea.value += val;
        }
        if( val == 'Clr'){
            displayArea.value= '';
        }
        if( val == 'Del'){
            displayArea.value= displayArea.value.slice(0,-1);
        }

        if( val === '='){
            let num1;  let num2;
            let currVal = displayArea.value;
            let currNum = ''; 
            let currOp = '';
            for( let i =0 ;i<currVal.length; i++){
                val = currVal[i];
                if( currVal[i]<=9 && currVal[i]>=0){
                    currNum+= currVal[i];
                }
                if(val=='+'||val=='-'||val=='/'||val=='*'   ){
                    
                    if( num1 == undefined){
                        num1 = Number(currNum) ;
                        currNum = ''
                    }else if( num2 == undefined){
                        num2 = Number(currNum);
                        currNum = ''
                        num1 = getRes(num1, num2, currOp);
                        // console.log(num1 + " fdfsfd")
                        num2 = undefined;
                    }
                    currOp = val;

                    // console.log("num1 " + num1);
                    // console.log("num2 " + num2);
                }
            }
            let res = getRes( num1, Number(currNum), currOp)
            displayArea.value = res;
            
        }
    })
});