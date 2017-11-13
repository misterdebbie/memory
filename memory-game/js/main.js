//console.log("Up and running!");

/*var cards = [
  {rank:"queen",suit:"hearts",cardImage:"images/queen-of-hearts.png"},
  {rank:"queen",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"},
  {rank:"king",suit:"hearts",cardImage:"images/king-of-hearts.png"},
  {rank:"king",suit:"diamonds",cardImage:"images/king-of-diamonds.png"}
];
var cardsInPlay =[];

var checkForMatch = function (){

    if (cardsInPlay[0]===cardsInPlay[1]){
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
}
var flipCard = function (){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  checkForMatch();
}
var createBoard = function (){
  for(var i = 0;i < cards.length;i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', i);
    document.getElementsByTagName('cardElement').addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();*/
//flipCard(0);
//flipCard(2);
console.log("yang check");
console.log("yang check 2!");

var cards = [
{rank:"queen",suit:"hearts",cardImage:"images/queen-of-hearts.png"},
{rank:"queen",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"},
{rank:"king",suit:"hearts",cardImage:"images/king-of-hearts.png"},
{rank:"king",suit:"diamonds",cardImage:"images/king-of-diamonds.png"}
];
var cardsInPlay = [];
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardsInPlay[0]);
console.log('User flipped ' + cardsInPlay[1]);*/
var checkForMatch = function (){
 //this.setAttribute('src',cards[cardId].cardImage);
  //this.setAttribute('src',cards[].cardImage);
  this.setAttribute('src',cards.cardImage);

  if (cardsInPlay.length === 2){
    if (cardsInPlay[0]===cardsInPlay[1]){
      alert("You found a match!");
    } else{
      alert("Sorry, try again.");
      }
  }
}
var flipCard = function (){
  var cardId = this.getAttribute('data-id');
  console.log('user id ' + cardId);
  cardsInPlay.push(cards[cardId].rank);
  console.log('User flipped ' + cards[cardId].rank);
  console.log('User flipped ' + cards[cardId].suit);
  console.log('User flipped ' + cards[cardId].cardImage);
  checkForMatch();
}
var createBoard = function (){
  for (var i = 0; i < cards.length;i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
  //  cardElement.setAttribute('data-id', cards[i]);
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}

createBoard();
