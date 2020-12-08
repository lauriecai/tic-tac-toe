// players class - generates players
class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}

const playerOne = new Player('Tiffany', 'Bolt');
const playerTwo = new Player('Laurie', 'Heart');

// UI class - handles UI tasks
class UI {

    static showMarker(el) {
        if (activePlayer == 0) {
            el.classList.add('bolt');
            el.classList.add('marked');
        } else {
            el.classList.add('heart');
            el.classList.add('marked');
        }
    }

    static nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }

    static showPlayerTurn() {
        const playerTurn = document.querySelector('.player-name');
        activePlayer === 0 ? playerTurn.textContent = 'Player 1' : playerTurn.textContent = 'Player 2';
    }
}

// events
let activePlayer = 0;

document.querySelector('.squares').addEventListener('click', (e) => {
    // display player marker
    UI.showMarker(e.target);

    // next player
    UI.nextPlayer();

    // tell next player to make their move
    UI.showPlayerTurn();
})