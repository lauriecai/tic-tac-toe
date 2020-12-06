// selectors
let squares = document.getElementsByClassName('square')
let playerName = document.querySelector('.player-name');

// players
const playerOne = newPlayer('Tiffany', 'Bolt');
const playerTwo = newPlayer('Laurie', 'Heart');

// variables
let activePlayer = 0;

// event listeners
for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', showMarker);
}

// functions    
function newPlayer(name, marker, win = false) {
    return {name, marker, win};
}

// show marker
function showMarker(e) {
    const click = e.target;
    if (activePlayer == 0) {
        click.classList.add('bolt');
        playerName.textContent = 'Player 2';
    } else {
        click.classList.add('heart');
        playerName.textContent = 'Player 1';
    }
    nextPlayer();
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}