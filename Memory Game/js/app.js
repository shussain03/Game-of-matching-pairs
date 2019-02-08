document.addEventListener("DOMContentLoaded", function () {
  console.log("working");

  

  const cards = document.querySelectorAll('.memory-card'); /*
  -memory-card elements in the CSS file will also be called by const cards = document.querySelectorAll in the app.js file.
  -const - has been used as a unique id(edentifier in this game
    */

   alert("Instructions: To play the game flip over two cards and find two images that are the same. Once you have found all the pairs you have won the game. Good luck, there are no losers only winners, so let's start!");

  var hasFlippedCard = false; // hasflipped card & flippedcard manages the flip state incase no cards are flipped over it is et to 'true' and set to the card being clicked.
  var lockBoard = false;
  var firstCard, secondCard;



  //
  function flipCard() {
    if (lockBoard) return; /*this freezes the first card*/
    if (this === firstCard) return; 

    this.classList.add('flip');

    if (!hasFlippedCard) {
      //on first click
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
      // second click
    secondCard = this;

    checkForMatch();
  }

  /*to add extrainformation in an html, use dataset.framework*/
  function checkForMatch() {
    var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   resetBoard();
  }

  //this is a prblem to be solved
  function unflipCards() {
    lockBoard = true;

    setTimeout(function() {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

    lockBoard = false;
     resetBoard();
    }, 1500);
  }

  
 function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

 (function shuffle() {
   cards.forEach(card =>{
     var randomPosition = Math.floor(Math.random() * 12);
     card.style.order = randomPosition;
   });
 })();
 
  cards.forEach(card => card.addEventListener('click',flipCard));  

  

  //if score of pairs of cards match a winning statement will appear = score has to be created
 





















});









































//DOMLoadedcontent - done
//https://jquery.com/ - download