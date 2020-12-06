// selectors
let squares = document.getElementsByClassName('square')

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
    } else {
        click.classList.add('heart');
    }
    nextPlayer();
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}