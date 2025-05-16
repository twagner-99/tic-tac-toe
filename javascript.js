const gameboard = {
    gameboardValues: [],
}

const players = {
    
}

const gameplay = {

}

// GAME FUNCTIONALITY - CONSOLE ONLY, NO DOM LOGIC YET
// We need to create a gameboard
    // To do this, we will push Xs or Os into an array
        // No clue why an array is recommended for this over
        // an object similar to something like this, and then
        // to update we could just do gameboard.space1 = whatever:
            // const gameboard = {
            //     space1: '';
            //     space2: '';
            // }
// We need to control how the game will work
    // player1 and player2 will alternate taking turns
    // If a space has already been used, it cannot be overwritten
    // We'll know if we have three in a row, because
    // we can tell where the Xs and Os are based on
    // their index in the array.
        // gameboard[0], [1], and [2] = top row
        // gameboard[3], [4], and [5] = middle row
        // gameboard[6], [7], and [8] = bottom row
        // There's only 8 ways to get three in a row
            // Would array destructuring be useful here at all?
// We need to create player profiles
    // Can do this with a factory function
    // Should take name and if they're X or O
        // player1 will get Xs
        // player2 will get Os
    // Should I just have one object for this and 
    // player1 will be an object and player2 will be an object?
        // And then I'll have a function that updates the
        // name key? Like:
            // const players = {
            //     player1: {name: name, token: 'X'},
            //     player2: {name: name, token: 'O'},
            // }
            // and then do players.player1.name = 'whatever'
