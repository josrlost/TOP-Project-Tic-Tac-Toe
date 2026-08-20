const ticTacToe = (() => {
    const gameboard = () => {
        let board = [
            ["First Row", "Second Row", "Third Row"],
            ["First Column", "Second Column", "Third Column"]
        ];
        let markingBoard = (playerInput = 0) => {
            if(playerInput !== 0) {
                return playerInput;
            }
            const [playerInputForRow, playerInputForColumn] = playerInput.split('');
            +playerInputForColumn;
            +playerInputForRow;
            for(let i = 0; i < board[1].length; i + playerInputForColumn) {
                return board[1][i];
                for(let j = 0; j < board[0].length; j + playerInputForRow) {
                    return board[0][j];
                }
            }
        }
        return {};
    }
    function createPlayer(name) {
        const { markingBoard } = gameboard;
        return {
            name,
            markingBoard,
        }
    }
}
)()

