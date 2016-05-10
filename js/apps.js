
/////Making the game////
var emptySpace = 0;
var playerSpace = 1;
var otherPlayerSpace = 2;
var gameBoard = new Array();
var makeBoard =function(){
  gameBoard = new Array();
  for(var i=0; i<6; i++){
    gameBoard[i] = new Array();
    for(var j=0; j<7; j++){
      gameBoard[i].push(0);
    }
  }
}
makeBoard();
console.log(gameBoard);

var playerMove = function() {
	gameBoard.this[0] = 1;
};

var checkWin = function(argument) {
	if (tile >= 7) {

	}
};

var resetGame = function() {

};
////Pseudo code
////Make the game board
////game board will be a series of arrays
////make player move function
////check for 2 things
////playerMove function
////
////
////
/////
/////
///