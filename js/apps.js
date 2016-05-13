
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
};
//gameBoard x and y axis was very confusing for a bit. To make things clear. rows = y axis, columns = x axis. gameBoard[row][column]
//gameBoard[y][x]

makeBoard();
// console.log(gameBoard);
// console.log(gameBoard[0]);
// console.log(gameBoard[0][1]);
////having every game tile be a variable helps
var fakeBoard = function(){
	for (var i = 0; i < 10; i++) {
		var frow = document.body.appendChild(document.createElement('div'));
		frow.className = 'frow';
		frow.id = 'frow' + i;
		for (var j = -3; j < 11; j++) {
			var face = document.getElementsByClassName('frow')[i].appendChild(document.createElement('div'));
			face.className = 'face';
			if (i > 5 || (j > 6  || j < 0)) {
				face.id = i + "," + j;
				face.setAttribute('data-value', j);
      	face.setAttribute('row-value', i);
			}
		}
	}
};
fakeBoard();
var boardSpace = document.getElementsByClassName('space');
console.log(boardSpace);
//////clickCount is critical for keeping track of turns.
// var getAdj = function(row,col) {
// 	if (document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === document.getElementById(row + ',' + col).classList[1]) {
// 		getAdjHL
// 	}	else if (document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === document.getElementById(row + ',' + col).classList[1]) {
// 		getAdjHR(row,col);
// 	} else if (document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === document.getElementById(row + ',' + col).classList[1]||
// 	document.getElementById((parseInt((row)) - 1) + ',' + col).classList[1] === document.getElementById(row + ',' + col).classList[1]) {
// 		getAdjV(row,col);
// 	} else {
// 		console.log('error')
// 	}
// };
	// console.log("ROW: "  + row);
	// console.log("COLD: "  + col);
// console.log(document.getElementById(row + ',' + col));
// console.log(row);
// console.log(parseInt(col) + 1);
// Checking if parseInt worked for finding elements by ID.
// console.log(document.getElementById((parseInt((row)) + 1) + ',' + col));
// console.log(document.getElementById((parseInt((row)) + 2) + ',' + col));
// console.log(document.getElementById(row + ',' + (parseInt(col) + 1)));
// console.log(document.getElementById(row + ',' + (parseInt(col) + 2)));
// console.log(document.getElementById(row + ',' + (parseInt(col) + 3)));


var getAdj = function(row,col) {
	// console.log('getAdj is running');
	// console.log("this is row then: " + row);
	// console.log("this is column: " + col);
	// console.log(parseInt(row));
	// console.log((parseInt((row)) + 1) + ',' + col);
	// console.log((parseInt((row)) - 1) + ',' + col);
	// console.log(document.getElementById(row + ',' + col).classList[1])
	// console.log(document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1]);
	// console.log(document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1]);
	// console.log(document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1]);
	// if (row === '5') {
	// 	console.log('test');
	// 	console.log('this is row ' + row);
	// 	console.log('this is column ' + col);
// if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 1).toString).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 2).toString).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 3).toString).classList[1] === 'red') {
// 	console.log(typeof row);
// 	console.log('Condition 3 works');
// 	alert('Player 1 wins');;
// 	}}
if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
	document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'red' &&
	document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'red' &&
	document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'red') {
	console.log('Condition 1 works');
	console.log(row);
	alert('Player 1 wins!');
	console.log("this is row now: " + row);
} else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
	document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'black' &&
	document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'black' &&
	document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'black') {
	console.log('Condition 2 works');
	console.log(row);
	alert('Player 2 wins!');
} 
//Checking horizontal reds from right to left
else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'red') {
	console.log(typeof row);
	console.log('Condition 3 works');
	alert('Player 1 wins');
} 
//Checking horizontal blacks from right to left
else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'black') {
	console.log(typeof row);
	console.log('Condition 4 works');
	alert('Player 2 wins!');
} 
//Checking horizontal reds from left to right
else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) - 3)).classList[1] === 'red') {
	console.log('Condition 5 works');
	alert('Player 1 wins');
} else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) - 3)).classList[1] === 'black') {
	console.log('Condition 6 works');
	alert('Player 2 wins');
} 
//Checking horizontal reds if final move is second from the left
else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red') {
	console.log('Condition 6 works');
	alert('Player 1 wins');
}
//Checking horizontal blacks if final move is second from the right
else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black') {
	console.log('Condition 6 works');
	alert('Player 1 wins');
}
else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black') {
	console.log('Condition 6 works');
	alert('Player 1 wins');
	}
//Checking horizontal reds if final move is second from the left
};
// var getAdjH = function(row,col) {
// if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'red') {
// 	alert('Player 1 wins');
// } else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
// 	document.getElementById(row + ',' + (parseInt(col) - 3)).classList[1] === 'red') {
// 	alert('Player 1 wins');
// } else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
// 	document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'black') {
// 	alert('Player 2 wins');
// }
// console.log(document.getElementById((row++ + inc) + ',' + col));
// console.log(row);
// var testMinus = (row-- - inc);
// console.log(parseInt(row));
// console.log(parseInt(row) + 1);
// var testPlus = (row++ + inc);
// console.log(row);
// if (document.getElementById(row + ',' + col).classList[1] === 'red' && document.getElementById((row + 1) + ',' + col).classList[1] === 'red' && document.getElementById((row + 2)+ ',' + col).classList[1] === 'red' && document.getElementById((row + 3)+ ',' + col).classList[1] === 'red') {
	// 	console.log('this is my life now');
	// }
// };
// var getAdjV = function(row,col) {
// 	console.log("this is row: " + row);
// 	console.log("this is column: " + col);
// 	if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
// 	document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'red' &&
// 	document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'red' &&
// 	document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'red') {
// 	console.log('WINNING!');
// 	alert('Player 1 wins!');
// } else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
// 	document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'black' &&
// 	document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'black' &&
// 	document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'black') {
// 	alert('Player 2 wins!');
// } else {
// 	console.log('error');
// }
// };
var clickCount = 0;
var trackClick = connectFourBoard.addEventListener("click",
		function() {
			clickCount++;
			clickCount = clickCount++;
			// console.log(clickCount);

		});

var checkForWin = function() {
	console.log("CHECK FOR WIN")
	console.log("This is all reds: " + allReds.length);
	console.log("This is all blacks: " + allBlacks.length);
	console.log("current click count: " + clickCount);
	if (clickCount%2 === 0) {
		console.log("checking checkforwin")
		console.log(allReds)
		console.log("step 1");
		getAdj(allReds[allReds.length - 1].getAttribute('row-value'),allReds[allReds.length - 1].getAttribute('data-value'));
	} else {
		getAdj(allBlacks[allBlacks.length - 1].getAttribute('row-value'),allBlacks[allBlacks.length - 1].getAttribute('data-value'));
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
				// console.log("clicking works!");
				// console.log(this.getAttribute('data-value'));
				checkRowSpace(this.getAttribute('data-value'));
				allClicked.push(this);
				checkForWin();
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
     			// console.log(clickCount);
     			// console.log(allReds);
     			break;
 			} else {
 				document.getElementById(i + "," + col).classList.add('black');
     			gameBoard[i][col] += 2;
     			allBlacks.push(document.getElementById(i + "," + col));
     			// console.log(clickCount);
     			// console.log(allBlacks);
     			break;
 			}
     	} else if (gameBoard[i][col] != 0 && gameBoard[i-1][col] === 0) {
     		if ((clickCount%2) === 0) {
     			document.getElementById((i - 1) + "," + col).classList.add('red');
     			gameBoard[i - 1][col] += 1;
     			allReds.push(document.getElementById((i - 1) + "," + col));
     			// console.log(clickCount);
     			// console.log(allReds); I did this to check if the elements were being pushed into the arrays properly
     			break;
 			} else {
 				document.getElementById((i - 1) + "," + col).classList.add('black');
     			gameBoard[i - 1][col] += 2;
     			allBlacks.push(document.getElementById((i - 1) + "," + col));
     			// console.log(clickCount);
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




// NOTES
// - comment out all console logs
// - break down down complex functions into smaller functions
// - console log to check each small function works, then comment them out
// - enter console log in terms of step 1, etc ONLY on functions that are invoked in order off the on click
// - which ones fire? where does it break?

// - conditional so that game stops and players cant keep clicking
// - 
