/*Game function*/
const cards = document.querySelectorAll('.card');
// This is to store cards and helps perform the matching logic.
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
// This function is to flip cards and then call check for match function after 2 click
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // click 1 when the player selects the card the flip card function fires
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // click 2 sets the second card as this
    secondCard = this;

    checkForMatch();
}
// checking for a mtach
function checkForMatch() {
    let isMatch = firstCard.dataset.dice === secondCard.dataset.dice;
    isMatch ? disableCards() : unflipCards();
}
// Once the cards have been mtached this function is fired
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
// This function only fires if the cards don't match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
// There is a 1500 secobnd delay to see flipping animation
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    
}
// This is a shuffle function used to mix cards positions using the math function which returns the largest integer less than or equal to a given number
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Music toggle function

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};

//Loop function

var x = document.getElementById("myAudio");

function enableLoop() { 
  x.loop = true;
  x.load();
} 

function disableLoop() { 
  x.loop = false;
  x.load();
} 

function checkLoop() { 
  alert(x.loop);
} 
/*Modal function*/

