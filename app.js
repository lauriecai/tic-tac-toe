// gameboard module
const gameboard = (() => {
    // properties
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return {squares};
    // methods
        // -start game
        // -switch player turns
        // -detect winner/tie
        // -announce results
})();

// generate players
const newPlayer = (name, marker) => {
    return {name, marker};
}

const playerOne = newPlayer('Tiffany', 'Bolt');
const playerTwo = newPlayer('Laurie', 'Heart');


// selectors


// event listeners


// functions

