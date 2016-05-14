(function onload() {
	/////Making the game////
	var connectFourBoard;
	var button;
	var allReds;
	var allBlacks;
	var allClicked;
	var rows;
	var gameBoard;
	var clickCount;
	var bodyHtml = '<div id="header"><h2>Connect Four</h2><button>Reset</button></div>' +
		'<div id="gameboard"></div>' +
		'<div id="game-info"><h3>Player 1</h3><p id="p1"></p><h3>Player 2</h3><p id="p2"></p></div>';
	var players = promptPlayers();
	resetBoard();
	
	function resetBoard() {
		document.querySelector('body').innerHTML = bodyHtml;
		document.getElementById('p1').innerHTML = players.one;
		document.getElementById('p2').innerHTML = players.two;
		connectFourBoard = document.getElementById('gameboard');
		button = document.getElementsByTagName('button');
		allReds = [];
		allBlacks = [];
		allClicked = [];
		rows = document.getElementsByClassName('row');
		gameBoard = [];
		clickCount = 0;
		button[0].addEventListener("click", function () {
			resetBoard();
		});
		connectFourBoard.addEventListener("click",
			function() {
				clickCount++;
				clickCount = clickCount++;
				if (clickCount === 42) {
					makeBoard();
				}
			}
		);
		makeBoard();
		fakeBoard();
		makeSpaceClickable();
	}

	function makeBoard() {
	  gameBoard = [];
	  for (var i = 0; i < 6; i++){
	    gameBoard[i] = new Array();
	    var row = connectFourBoard.appendChild(document.createElement('div'));
			row.className = 'row';
			row.id = 'row' + i;
	    for (var j = 0; j < 7; j++){
	      gameBoard[i].push(0);
	      var space = rows[i].appendChild(document.createElement('div'));
	      space.className = 'space';
	      space.innerHTML = '';
	      space.id = i + "," + j;
	      space.setAttribute('column-value', j);
	      space.setAttribute('row-value', i);
	    }
	  }
	};

	function fakeBoard() {
		for (var i = -3; i < 10; i++) {
			var frow = document.body.appendChild(document.createElement('div'));
			frow.className = 'frow';
			frow.id = 'frow' + i;
			for (var j = -3; j < 11; j++) {
				var fspace = frow.appendChild(document.createElement('div'));
				fspace.className = 'fspace';
				if ((i > 5 || i < 0) || (j > 6  || j < 0)) {
					fspace.id = i + "," + j;
					fspace.setAttribute('column-value', j);
	      			fspace.setAttribute('row-value', i);
				}
			}
		}
	};
	
	function promptPlayers() {
		var oneName = prompt('Enter Player One name') || '';
		var twoName = prompt('Enter Player Two name') || '';
		return {
			one: oneName,
			two: twoName
		};
	}
	
	function getAdj(row,col) {
		//There are 13 win conditions if you base your check win off of the last move made.
		//1 vertical check. 4 horizontal checks. 8 diagonal checks. I have 26 conditions because I separated it by class
		//Checking win conditions starting from vertical reds
		if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'red') {
			console.log('Condition 1 works');
			console.log(row);
			alert(players.one + ' wins!');
			// console.log("this is row now: " + row);
			resetBoard();
		} 
		//Checking vertical blacks
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 2) + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 3) + ',' + col).classList[1] === 'black') {
			console.log('Condition 2 works');
			console.log(row);
			alert(players.two + ' wins!');
			resetBoard();
		} 
		//Checking horizontal reds from right to left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'red') {
			console.log(typeof row);
			console.log('Condition 3 works');
			alert(players.one + ' wins!');
			resetBoard();
		} 
		//Checking horizontal blacks from right to left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 3)).classList[1] === 'black') {
			console.log(typeof row);
			console.log('Condition 4 works');
			alert(players.two + ' wins!');
			resetBoard();
		} 
		//Checking horizontal reds from left to right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 3)).classList[1] === 'red') {
			console.log('Condition 5 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking horizontal blacks from left to right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 3)).classList[1] === 'black') {
			console.log('Condition 6 works');
			alert(players.two + ' wins!');
			resetBoard();
		} 
		//Checking horizontal reds if final move is second from the left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red') {
			console.log('Condition 7 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking horizontal blacks if final move is second from the left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black') {
			console.log('Condition 8 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking horizontal reds if final move is second from the right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'red') {
			console.log('Condition 9 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking horizontal blacks if final move is second from the right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById(row + ',' + (parseInt(col) + 1)).classList[1] === 'black') {
			console.log('Condition 10 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is at the top left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 3) + ',' + (parseInt(col) + 3)).classList[1] === 'red') {
			console.log('Condition 11 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is at the top left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 3) + ',' + (parseInt(col) + 3)).classList[1] === 'black') {
			console.log('Condition 12 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is at the bottom right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 3) + ',' + (parseInt(col) - 3)).classList[1] === 'red') {
			console.log('Condition 13 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is at the bottom right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 3) + ',' + (parseInt(col) - 3)).classList[1] === 'black') {
			console.log('Condition 14 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is at the bottom left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 3) + ',' + (parseInt(col) + 3)).classList[1] === 'red') {
			console.log('Condition 15 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is at the bottom left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 3) + ',' + (parseInt(col) + 3)).classList[1] === 'black') {
			console.log('Condition 16 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is at the top right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 3) + ',' + (parseInt(col) - 3)).classList[1] === 'red') {
			console.log('Condition 17 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is at the top right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 3) + ',' + (parseInt(col) - 3)).classList[1] === 'black') {
			console.log('Condition 18 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is second from the left ascending left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) + 2)).classList[1] === 'red') {
			console.log('Condition 19 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is second from the left ascending left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) + 2)).classList[1] === 'black') {
			console.log('Condition 20 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is second from the right ascending left
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red') {
			console.log('Condition 21 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is second from the right ascending left
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black') {
			console.log('Condition 22 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is second from the right ascending right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) - 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red') {
			console.log('Condition 23 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is second from the right ascending right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 2) + ',' + (parseInt(col) - 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black') {
			console.log('Condition 24 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
		//Checking diagonal reds if final move is second from the left ascending right
		else if (document.getElementById(row + ',' + col).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) + 2)).classList[1] === 'red' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'red') {
			console.log('Condition 25 works');
			alert(players.one + ' wins!');
			resetBoard();
		}
		//Checking diagonal blacks if final move is second from the left ascending right
		else if (document.getElementById(row + ',' + col).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 1) + ',' + (parseInt(col) + 1)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) - 2) + ',' + (parseInt(col) + 2)).classList[1] === 'black' &&
			document.getElementById((parseInt((row)) + 1) + ',' + (parseInt(col) - 1)).classList[1] === 'black') {
			console.log('Condition 26 works');
			alert(players.two + ' wins!');
			resetBoard();
		}
	};
	
	function checkForWin() {
		console.log("CHECK FOR WIN")
		console.log("This is all reds: " + allReds.length);
		console.log("This is all blacks: " + allBlacks.length);
		console.log("current click count: " + clickCount);
		if (clickCount%2 === 0) {
			console.log("checking checkforwin")
			console.log(allReds)
			console.log("step 1");
			getAdj(allReds[allReds.length - 1].getAttribute('row-value'),allReds[allReds.length - 1].getAttribute('column-value'));
		} else {
			getAdj(allBlacks[allBlacks.length - 1].getAttribute('row-value'),allBlacks[allBlacks.length - 1].getAttribute('column-value'));
		}
	};
	
	function makeSpaceClickable() {
		var boardSpace = document.getElementsByClassName('space');
		for (var i = 0; i < boardSpace.length; i++) {
			boardSpace[i].addEventListener("click",
				function() {
					checkRowSpace(this.getAttribute('column-value'));
					allClicked.push(this);
					checkForWin();
				})
		}
	};
	
	function boardValue(row, col) {
		if (gameBoard[row] == undefined || gameBoard[row][col] == undefined) {
	    	return undefined;
	  	} else {
	    	return gameBoard[row][col];
	  	}
	};
	
	//////add Values////
	function checkRowSpace(col) {
		for (var i = rows.length - 1; i > 0; i--) {
	     	if (gameBoard[i][col] === 0 && gameBoard[i-1][col] === 0) {
	     		if (clickCount %2 === 0) {
	     			document.getElementById(i + "," + col).classList.add('red');
	     			gameBoard[i][col] += 1;
	     			allReds.push(document.getElementById(i + "," + col));
	     			break;
	 			} else {
	 				document.getElementById(i + "," + col).classList.add('black');
	     			gameBoard[i][col] += 2;
	     			allBlacks.push(document.getElementById(i + "," + col));
	     			break;
	 			}
	     	} else if (gameBoard[i][col] != 0 && gameBoard[i-1][col] === 0) {
	     		if ((clickCount%2) === 0) {
	     			document.getElementById((i - 1) + "," + col).classList.add('red');
	     			gameBoard[i - 1][col] += 1;
	     			allReds.push(document.getElementById((i - 1) + "," + col));
	     			break;
	 			} else {
	 				document.getElementById((i - 1) + "," + col).classList.add('black');
	     			gameBoard[i - 1][col] += 2;
	     			allBlacks.push(document.getElementById((i - 1) + "," + col));
	     			break;
	 			}
	   		} else if (gameBoard[0][col] > 0) {
	   			alert("Can't let you do that!");
	   			clickCount = clickCount - 1;
	   			break;
	   		}
	 	}
	}
}());

