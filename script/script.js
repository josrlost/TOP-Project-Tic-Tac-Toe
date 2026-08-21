const ticTacToe = (() => {
    let currentMove = []; 
    const gameboard = (() => {
        let board = [
            ["First Row", "Second Row", "Third Row"],
            ["First Column", "Second Column", "Third Column"]
        ];
        function makingMove (playerInput = '00') {
            let [playerInputForRow, playerInputForColumn] = playerInput.split('');
            +playerInputForColumn;
            +playerInputForRow;
            return playerInputForColumn;
            return playerInputForRow;
            for(let i = 0; i < board[1].length; i + playerInputForColumn) {
                return board[1][i];
                for(let j = 0; j < board[0].length; j + playerInputForRow) {
                    return board[0][j];
                }
            return currentMove = resultedMove.push(board) 
            }
        }
        return { makingMove };
    })()
    let currentPlayers = [];
    function createPlayer(name = '', uid = null) {
        if(currentPlayers.length >= 2) {
            throw Error('There are already two created players')
        } else {
            const { makingMove } = gameboard;
            uid = crypto.randomUUID();
            const player = {
                name,
                makingMove,
                uid
            }
            currentPlayers.push(player);
        }
    }
    function resetPlayer() {
        currentPlayers.splice(0, 2);
    }
    function modifyPlayer(name = '', playerNumber = 1) {
        if(playerNumber === 1) {
            currentPlayers[0].name = name;
        }
        else if(playerNumber === 2) {
            currentPlayers[1].name = name;
        }
        else {
            throw Error('Invalid input');
        }
    }
    let displayControl = (() =>{
        let currentScore;
    })()
    return {
        gameboard,
        currentPlayers,
        displayControl,
        createPlayer,
        resetPlayer,
        modifyPlayer,
    }
}
)()

console.log(ticTacToe);
