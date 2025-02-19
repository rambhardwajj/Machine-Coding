const nameDisplay = document.getElementById('username')
const textArea = document.getElementById('area')
const submitBtn = document.getElementById('submitBtn')

const custReviewSection = document.getElementById('cust-reviews');

console.log(nameDisplay, textArea, submitBtn, custReviewSection)

submitBtn.addEventListener('click', ()=>{
    const userName = nameDisplay.value;
    const userReview = textArea.value;

    const reviewCard = document.createElement('div')
    const subStars = document.createElement('div')
    const para = document.createElement('span');
    const nameSpan = document.createElement('span')
        
    para.innerText = userReview;
    nameSpan.innerText = userName;

    reviewCard.appendChild(subStars);
    reviewCard.appendChild(para); 
    reviewCard.appendChild(nameSpan)
    // console.log(reviewCard)

})