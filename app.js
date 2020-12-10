// // gameboard object - wraps functions relating to gameboard
// const gameBoard = (() => {

//     // create board array ✅
//     let board = [];
//     for (i = 0; i < 9; i++) {
//         board.push('');
//     }
    
//     // render based on board array
//     const squares = document.querySelector('.squares');

//     board.forEach((item, index) => {
//         const square = document.createElement('div');
//         square.className = 'square';
//         square.setAttribute('data-square', index);
        
//         // add elements to DOM
//         squares.appendChild(square);
//     })
// })();

// // game object - wraps functions relating to game flow
// const game = (() => {
    


// })();

// ----- CODE START -----

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
    square.setAttribute('data-square', index);
    squares.appendChild(square);
})

// player turn
let activePlayer = 0;

// add event listeners on each square
