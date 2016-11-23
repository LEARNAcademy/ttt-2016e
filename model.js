//create variable to define current board. In the board array, 0 represents a blank space, 1 represents an X, and -1 represents an O.
//create variables for X defined as 1 and O defined as -1.

var x = 1;
var o = -1;
var player = x;
var counter = 0;

var board =
  [0,0,0,
   0,0,0,
   0,0,0];

//function that determines if it is X's turn
function moveTo(position) {
  board[position] = player;
  if (counter < 8 && !checkWinner(board)) {  //if there are less than 9 moves
    //board[position] = player;
    if (player === x) {
      console.log("Player X has moved to " + position);
      player = o;
    } else {
      console.log("Player O has moved to " + position);
      player = x;
    }

    showBoard();
    console.log("You have " + (8 - counter) + " move(s) left.");
    counter++;
    return true;

    // if (checkWinner(board)) {
    //   console.log("Game Over Winner!");
    //   return false;
    // } else {
    //   return true;
    //}
  } else if (checkWinner(board)) {
    showBoard();
    console.log("Game Over Winner!");
    return false;
  } else {
    showBoard();
    console.log("Game Over. Out of turns");
    return false;
  }
}

function showBoard() {
  console.log(convert(board[0]), convert(board[1]), convert(board[2]));
  console.log(convert(board[3]), convert(board[4]), convert(board[5]));
  console.log(convert(board[6]), convert(board[7]), convert(board[8]));
}

function reset() {
  x = 1;
  o = -1;
  player = x;
  counter = 0;

  board =
    [0,0,0,
     0,0,0,
     0,0,0];
}

function convert(value) {
  if (value === 1) {
    return "X";
  } else if (value === -1) {
    return "O";
  } else {
    return ".";
  }
}

//function that checks for a winner by calling a horizontal, vertical, and diagonal checker
function checkWinner(board) {
  if (checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)) {
    return true;
  } else {
    return false;
  }
}
//function that checks if any 'horizontal' portion of the array has the same value
function checkHorizontal(board) {
  if (board[0] === board[1] && board[1] === board[2] && board[0] != 0) {
    return true;
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] != 0) {
    return true;
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] != 0) {
    return true;
  } else {
    return false;
  }
}
//function that checks if any 'vertical' portion of the array has the same value
function checkVertical(board) {
  if (board[0] === board[3] && board[0] === board[6] && board[0] != 0) {
    return true;
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] != 0) {
    return true;
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] != 0) {
    return true;
  } else {
    return false;
  }
}
//function that checks if any 'diagonal' portion of the array has the same value
function checkDiagonal(board) {
  if (board[0] === board[4] && board[0] === board[8] && board[0] != 0) {
    return true;
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] != 0) {
    return true;
  } else {
    return false;
  }
}

function test() {
  moveTo(0);
  moveTo(1);
  moveTo(2);
  moveTo(4);
  moveTo(3);
  moveTo(6);
  moveTo(7);
  moveTo(5);
  moveTo(8);
}
