
/////Making the game////
var connectFourBoard = document.getElementById('gameboard');
// var emptySpace = 0;
// var playerSpace = 1;
// var otherPlayerSpace = 2;
////the allReds and allBlacks arrays didn't work because they automatically arranged themselves in numerical order
// var allReds = document.getElementsByClassName('red');
// var allBlacks = document.getElementsByClassName('black');
var allReds = [];
var allBlacks = [];
var allClicked = [];
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
      // space.innerHTML = '0';<--Originally used 0, 1 and 2 as a basic visual representation
      space.innerHTML = '';
      space.id = i + "," + j;
      space.setAttribute('data-value', j);
      space.setAttribute('row-value', i);
      // space.addEventListener('click',
      // 	function() {
      // 	console.log(hello)})
    }
  }
}
//gameBoard x and y axis was very confusing for a bit. To make things clear. rows = y axis, columns = x axis. gameBoard[row][column]
//gameBoard[y][x]

makeBoard();
console.log(gameBoard);
console.log(gameBoard[0]);
console.log(gameBoard[0][1]);
////having every game tile be a variable helps
var boardSpace = document.getElementsByClassName('space');
console.log(boardSpace);
//////clickCount is critical for keeping track of turns.
var getAdj = function(row,col) {
console.log(document.getElementById(row + ',' + col));
console.log(row + 1);

// if (document.getElementById(row + ',' + col).classList[1] === 'red' && document.getElementById((row + 1) + ',' + col).classList[1] === 'red' && document.getElementById((row + 2)+ ',' + col).classList[1] === 'red' && document.getElementById((row + 3)+ ',' + col).classList[1] === 'red') {
	// 	console.log('this is my life now');
	// }
};
var clickCount = 0;
var trackClick = connectFourBoard.addEventListener("click",
		function() {
			clickCount++;
			clickCount = clickCount++;
			console.log(clickCount);

		});

var checkForWin = function(space) {
	console.log(allReds);
	console.log(allBlacks);
	console.log(clickCount);
	if (clickCount%2 === 0) {
		getAdj(allReds[allReds.length - 1].getAttribute('row-value'),allReds[allReds.length - 1].getAttribute('data-value'));
	} else {
		getAdj(allBlacks[allBlacks.length - 1].getAttribute('row-value'),allBlacks[allBlacks.length - 1].getAttribute('data-value'))
	}
	// console.log(allClicked[allClicked.length - 1].id + 1);
	// console.log('this works!');
	// if (allClicked[allClicked.length - 1] === allReds[allReds.length - 1]) {
	// getAdj(allClicked[allClicked.length - 1].getAttribute('row-value'),allClicked[allClicked.length - 1].getAttribute('data-value'));
	// } else if (allClicked[allClicked.length - 1] === allBlacks[allBlacks.length - 1])
};

var makeSpaceClickable = function() {
	for (var i = 0; i < boardSpace.length; i++) {
		boardSpace[i].addEventListener("click",
			function() {
				console.log("clicking works!");
				console.log(this.getAttribute('data-value'));
				checkRowSpace(this.getAttribute('data-value'));
				allClicked.push(this);
				checkForWin(this);
			})
	}
};
makeSpaceClickable();
// connectFourBoard.addEventListener("click",
// 	function() {
// 		console.log("clicking works!");
// 		console.log(this);
// 		checkRowSpace(0);
// 	})

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

//////add Values////
var checkRowSpace = function(col) {
	// for(var i = rows.length - 1; i >= 0; i--) lol this didn't work for the top row. Solution found below.
 	  for(var i = rows.length - 1; i > 0; i--){
     	if (gameBoard[i][col] === 0 && gameBoard[i-1][col] === 0) {
     		// console.log(document.getElementById(i + "," + col));
     		if ((clickCount%2) === 0) {
     			document.getElementById(i + "," + col).classList.add('red');
     			gameBoard[i][col] += 1;
     			allReds.push(document.getElementById(i + "," + col));
     			console.log(clickCount);
     			// console.log(allReds);
     			break;
 			} else {
 				document.getElementById(i + "," + col).classList.add('black');
     			gameBoard[i][col] += 2;
     			allBlacks.push(document.getElementById(i + "," + col));
     			console.log(clickCount);
     			// console.log(allBlacks);
     			break;
 			}
     	} else if (gameBoard[i][col] != 0 && gameBoard[i-1][col] === 0) {
     		if ((clickCount%2) === 0) {
     			document.getElementById((i - 1) + "," + col).classList.add('red');
     			gameBoard[i - 1][col] += 1;
     			allReds.push(document.getElementById((i - 1) + "," + col));
     			console.log(clickCount);
     			// console.log(allReds); I did this to check if the elements were being pushed into the arrays properly
     			break;
 			} else {
 				document.getElementById((i - 1) + "," + col).classList.add('black');
     			gameBoard[i - 1][col] += 2;
     			allBlacks.push(document.getElementById((i - 1) + "," + col));
     			console.log(clickCount);
     			// console.log(allBlacks);
     			break;
 			}
   		} else if (gameBoard[0][col] > 0) {
   			alert("Can't let you do that!");
   			clickCount = clickCount - 1;
   			break;
   		}
 	}
};
///Just realized the above checkRowSpace function isn't working because right now my gameBoard[i][j] is not an integer
var resetGame = function() {

};

var playerMove = function(col) {
	checkRowSpace(col);
};

// checkRowSpace(0);
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