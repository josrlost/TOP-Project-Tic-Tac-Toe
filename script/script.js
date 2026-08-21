const ticTacToe = (() => {
    const gameboard = (() => {
        let board = [
            ["First Row", "Second Row", "Third Row"],
            ["First Column", "Second Column", "Third Column"]
        ];
        let currentMove = []; 
        function makingMove (playerInput = 0) {
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
        return { currentMove, makingMove };
    })()
    let currentScore = (() =>{
        const { currentMove } =  gameboard;
    })()
    let currentPlayers = [];
    function createPlayer(name = '') {
        const { makingMove } = gameboard;
        currentPlayers = currentPlayers.push(
            {
                name,
                makingMove
            }
        )
    }
    return {
        gameboard,
        currentPlayers,
        currentScore,
        createPlayer,
    }
}
)()

console.log(ticTacToe);