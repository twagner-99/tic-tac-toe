const go = (function() {
    const players = {
        // createPlayers populates the players object
        // with player1 and player2 objects.
    }

    function createPlayers(name) {
        if (!('player1' in players)) {      // If player1 doesn't exist, create it
            players.player1 = {};           // If it does, create player1.
            players.player1.name = name;
            players.player1.token = 'X';
        }

        else {
            players.player2 = {};
            players.player2.name = name;
            players.player2.token = '0';
        }

        // Add code to prohibit more than two players
    }

    const gameboard = {
        gameboardInterface: ['', '', '', '', '', '', '', '', ''],
    }

    function placeMarker() {
        gameboard.gameboardInterface[0] = 'X';
        gameboard.gameboardInterface[1] = 'X';
        gameboard.gameboardInterface[2] = 'X';

        if (gameboard.gameboardInterface[0] === gameboard.gameboardInterface[1] && 
            gameboard.gameboardInterface[0] === gameboard.gameboardInterface[2] && 
            gameboard.gameboardInterface[0] !== '') {
            console.log('WINNER');
        }

        if (gameboard.gameboardInterface[2] !== '') {
            console.log('Cannot place marker in a space that is already taken');
        }
        
    }

    const gameboardContainer = document.querySelector('#gameboard-container');

    // gameboard.gameboardInterface.forEach(item => {
    //     const markerSquare = document.createElement('div');
    //     markerSquare.textContent = item;
    //     gameboardContainer.appendChild(markerSquare);
        // I think it would be cleanest to just initilize the empty board
        // in my HTML, do CSS grid to get some nice squares, put all this 
        // in a function, then run that function on click.
        // Perhaps this would even go within the placeMarker function that
        // needs to run on click.
    // })

    return {
        createPlayers,
        placeMarker,
        players,
        gameboard,
    }

})();


const gameplay = {

}

// GAME FUNCTIONALITY - CONSOLE ONLY, NO DOM LOGIC YET
// We need to create a gameboard
    // To do this, we will append Xs or Os into to array,
    // not push. If pushed, we wouldn't have a grid game board
    // because each turn the token would just be added to the 
    // end of the array.
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
            //     player1: {name: '', token: 'X'},
            //     player2: {name: '', token: 'O'},
            // }
            // and then do players.player1.name = 'whatever'
