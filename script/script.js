const ticTacToe = (() => {
    let name = '';
    let boardMoves = [];
    const gameboard = (() => {
        let board = [
            ['blank', 'first column', 'second column', 'third column'],
            ['blank', 'first row', 'second row', 'third row'],
        ];
        function makingMove (playerInputForColumn = 0, playerInputForRow = 0) {
            let resultedMove = [];
            resultedMove.push(board[0][playerInputForColumn]);
            resultedMove.push(board[1][playerInputForRow]);
            console.log(resultedMove);
            this.totalMoves.push([resultedMove])
            this.lastMove = resultedMove.concat();
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
            let totalMoves = [];
            let lastMove = [];
            const player = {
                name,
                makingMove,
                uid,
                totalMoves,
                lastMove
            };
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
        let currentScore = '0 - 0';
        function getTheCurrentMove() {
            return currentMoves;
        }
        function getTheCurrentScore() {
            return currentScore;
        }
        function setTheCurrentScore() {

        }
        return { 
            getTheCurrentMove,
            getTheCurrentScore,
            setTheCurrentScore,
        }
    })()
    return {
        currentPlayers,
        displayControl,
        createPlayer,
        resetPlayer,
        modifyPlayer,
    }
}
)()

console.log(ticTacToe);
