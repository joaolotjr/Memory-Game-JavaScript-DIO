const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card ===secondCard.dataser.card){
        disableCards();
        return;
    }
    unflipCard();

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

function unflipCard(){
    
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})



