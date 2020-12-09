// player factory function - generates players
function newPlayer(name, marker) {
    return {name, marker};
}

const playerOne = newPlayer('Tiffany', 'bolt');
const playerTwo = newPlayer('Laurie', 'heart');

// gameboard object - wraps functions relating to gameboard
const gameBoard = (() => {

    // create board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    }

    // render based on board array
    

})();

// game object - wraps functions relating to game flow
