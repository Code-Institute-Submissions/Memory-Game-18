/*Game function*/

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

if (!hasFlippedCard) {
// click 1
hasFlippedCard = true;
firstCard = this;

return;
}

 // click 2
secondCard = this;

checkForMatch();
}

function checkForMatch() {
let isMatch = firstCard.dataset.dog === secondCard.dataset.dog;
isMatch ? disableCards() : unflipCards();
}

function disableCards() {
firstCard.removeEventListener('click', flipCard);
 secondCard.removeEventListener('click', flipCard);

resetBoard();
 }

function unflipCards() {
lockBoard = true;
setTimeout(() => {
firstCard.classList.remove('flip');
secondCard.classList.remove('flip');

 resetBoard();
}, 1500);
 }
function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];
}

(function shuffle() {
cards.forEach(card => {
let randomPos = Math.floor(Math.random() * 20);
card.style.order = randomPos;
});
})();

cards.forEach(card => card.addEventListener('click', flipCard));

//BGM toggle function

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

/*Modal function*/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
overlay.classList.add('active')
}

function closeModal(modal) {
if (modal == null) return
modal.classList.remove('active')
overlay.classList.remove('active')
}
