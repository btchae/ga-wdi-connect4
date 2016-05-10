
/////Making the game////
var gameField = new Array();
var makeBoard =function(){
  gameField = new Array();
  for(var i=0; i<6; i++){
    gameField[i] = new Array();
    for(var j=0; j<7; j++){
      gameField[i].push(0);
    }
  }
}
makeBoard();
console.log(gameField);