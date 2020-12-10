// generate board array
let board = [];
for (i = 0; i < 9; i++) {
    board.push('');
}

// display square for each array item
let squares = document.querySelector('.squares');

board.forEach((item, index) => {
    const square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
})

// create players
const playerOne = {name: 'Player 1', marker: 'bolt'};
const playerTwo = {name: 'Player 2', marker: 'heart'};

// player turn
let activePlayer = playerOne;

// winning conditions
const winningAxes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

let remainingSpots = 9;
let playerName = document.querySelector('.player-name');
let subtext = document.querySelector('.subtext');
let winnerDeclared = false;

// add event listeners on each square
Array.from(squares.children).forEach((square, index) => {
    square.addEventListener('click', () => {
        // display active player marker
        square.classList.add(activePlayer.marker);
        square.setAttribute('data', activePlayer.marker);
        // update array value to be that of active player
        board[index] = activePlayer.marker;
        // remove event listener from the marked index
        square.style.pointerEvents = 'none';
        // update remainingSpots
        remainingSpots -= 1;
        // check winner: if all 3 values within any of these conditions are ===...
        checkWinner();
        // check remaining spots
        if (winnerDeclared == false) {
            if (remainingSpots > 0) {
                alertNextPlayer();
                nextPlayer();
            } else if (remainingSpots == 0) {
                declareTie();
            }
        }
    })
});

// check winner
function checkWinner() {
    winningAxes.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
        if (board[item[0]] === activePlayer.marker && board[item[1]] === activePlayer.marker && board[item[2]] === activePlayer.marker) {
            console.log('winner!');
            subtext.innerHTML = `<b>${activePlayer.name} wins!</b>`;
            winnerDeclared = true;
        } 
    })
}

// next player
function nextPlayer() {
    activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
}

// alert next player
function alertNextPlayer() {
    activePlayer === playerOne ? playerName.textContent = 'Player 2' : playerName.textContent = 'Player 1';
}

// declare tie
function declareTie() {
    console.log("It's a tie");
    subtext.innerHTML = "<b>Tie game!</b>";
}