const ticTacToe = (() => {
    const gameboard = (() => {
        let board = [
            ["First Row", "Second Row", "Third Row"],
            ["First Column", "Second Column", "Third Column"]
        ];
        let currentMove = []; 
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
        return { currentMove, makingMove };
    })()
    let currentScore = (() =>{
        const { currentMove } =  gameboard;
    })()
    let currentPlayers = [];
    function createPlayer(name = '') {
        if(currentPlayers.length >= 2) {
            throw Error('There are already two created players')
        } else {
            const { makingMove } = gameboard;
            currentPlayers = currentPlayers.push(
                {
                    name,
                    makingMove
                }
            )
        }
    }
    function resetPlayer() {
        currentPlayers = []
    }
    return {
        gameboard,
        currentPlayers,
        currentScore,
        createPlayer,
        resetPlayer,
    }
}
)()

console.log(ticTacToe);

array1 = [1, 2, 3];
console.log(array1);
array1 = [];
console.log(array1);