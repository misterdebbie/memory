//console.log("Up and running!");

var cards = [
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
var flipCard = function (cardId){
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  checkForMatch();
}
var createBoard = function (){
  for (var i = 0;i < theArray.length;i++){
    var newImg = document.createElement('img');
    newImg.setAttribute('src','images/back.png');
    newImg.setAttribute('data-id', i);
  }
}
flipCard(0);
flipCard(2);
