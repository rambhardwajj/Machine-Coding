const nameDisplay = document.getElementById('username')
const textArea = document.getElementById('area')
const submitBtn = document.getElementById('submitBtn')

const recentReview = document.getElementById('review-display');

console.log(nameDisplay, textArea, submitBtn, recentReview)

submitBtn.addEventListener('click', ()=>{
    let userName = '~ ' +  nameDisplay.value; 
    if( userName == '~ ') {
        userName = userName + "Anonymous";
    }
    const userReview = textArea.value;
    if(userReview.length ==0){
        window.alert('Review toh daalo bhaisab')
        return;
    }

    const recReviewCard = document.createElement('div')
    const subStars = document.createElement('div')
    const para = document.createElement('div');
    const nameSpan = document.createElement('span')
        
    para.innerText = userReview;
    nameSpan.innerText = userName;

    recReviewCard.appendChild(subStars);
    recReviewCard.appendChild(para); 
    recReviewCard.appendChild(nameSpan)
    console.log(recReviewCard)

    recReviewCard.classList.add('js-rec-review')
    para.classList.add('js-para')
    nameSpan.classList.add('js-name')

    recentReview.appendChild(recReviewCard)

})