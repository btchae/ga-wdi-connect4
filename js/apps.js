
/////Making the game////
var emptySpace = 0;
var playerSpace = 1;
var otherPlayerSpace = 2;
var rows = document.getElementsByClassName('row');
////for now makeBoard has j,i but will eventually be 0
var gameBoard = [];
var makeBoard = function(){
  gameBoard = [];
  for(var i = 0; i < 6; i++){
    gameBoard[i] = new Array();
    var row = document.getElementById('gameboard').appendChild(document.createElement('div'));
		row.className = 'row';
		row.id = 'row' + i;
    for(var j = 0; j < 7; j++){
      gameBoard[i].push(0);
      var space = document.getElementsByClassName('row')[i].appendChild(document.createElement('div'));
      space.className = 'space';
      space.innerHTML = '0';
      space.id = i + "," + j;
    }
  }
}
//gameBoard x and y axis was very confusing for a bit. To make things clear. rows = y axis, columns = x axis. gameBoard[row][column]
//gameBoard[y][x]

makeBoard();
console.log(gameBoard);
console.log(gameBoard[0]);
console.log(gameBoard[0][1]);
// var playerMove = function() {
// 	.addEventListener("click", )
// };

var checkWin = function() {

};



var boardValue = function(row, col) {
	 if(gameBoard[row] == undefined || gameBoard[row][col] == undefined){
    return undefined;
  } else {
    return gameBoard[row][col];
  }
};

// var checkRowSpace = function(col) {
// 	  for(var i = 0; i < 6; i++){
// 	  	// console.log(gameBoard[i][col]);
// 	  	// console.log(boardValue(i, col));
//     	if (gameBoard[i][col] === 0 && gameBoard[i+1][col] === 0) {
//     		break;
//     	} else {
//     		// gameBoard[i][col] = 1; I was really confused about why I wasn't getting a coordinate pair
//     		//but then I figured it out as indicated below.
//     		gameBoard[i][col] += 1;
//     		console.log(gameBoard);
//     	}
// }
// };
var checkRowSpace = function(col) {
	// for(var i = rows.length - 1; i >= 0; i--) lol this didn't work for the top row. Solution found below.
 	  for(var i = rows.length - 1; i > 0; i--){
     	if (gameBoard[i][col] === 0 && gameBoard[i-1][col] === 0) {
     		// console.log(document.getElementById(i + "," + col));
     		document.getElementById(i + "," + col).innerHTML = 1;
     		gameBoard[i][col] += 1;
     		break;
     	} else if (gameBoard[i][col] != 0 && gameBoard[i-1][col] === 0) {
  			document.getElementById((i - 1) + "," + col).innerHTML = 1;
     		gameBoard[i-1][col] += 1;
     		break;
   	}
 }
};
///Just realized the above checkRowSpace function isn't working because right now my gameBoard[i][j] is not an integer
var resetGame = function() {

};

checkRowSpace(0);
// checkRowSpace(0);
// checkRowSpace(0);
// checkRowSpace(0);
// checkRowSpace(0);
// checkRowSpace(0);
// checkRowSpace(0);
///these console logs were to help me understand/comprehend that whole row vs. column confusion I had
// console.log(boardValue(2, 3));
// console.log(boardValue(3, 2));
// console.log(boardValue(5,6));
///////////////////////////////////////

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