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
    let displayControl = (() => {
        let playerOneScore = 0;
        let playerTwoScore = 0;
        let currentScore = `${playerOneScore} - ${playerTwoScore}`;
        function getTheCurrentScore() {
            return currentScore;
        }
        function setTheCurrentScore() {
            let playerOneMoves = currentPlayers[0].totalMoves.concat();
            console.log(playerOneMoves);
            let playerTwoMoves = currentPlayers[1].totalMoves.concat();
            player1ProvisionalScore = 0;
            player2ProvionalScore = 0;
            if(playerOneMoves.length === 3) {
                for(let [ele] of playerOneMoves) {
                    let [a, b] = ele;
                    switch(a && b) {
                        case 'first column' && 'first row':
                        case 'first column' && 'second row':
                        case 'first column' && 'third row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'second column' && 'first row':
                        case 'second column' && 'second row':
                        case 'second column' && 'third row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'third column' && 'first row':
                        case 'third column' && 'second row':
                        case 'third column' && 'third row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'first column' && 'first row':
                        case 'second column' && 'first row':
                        case 'third column' && 'first row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'first column' && 'second row':
                        case 'second column' && 'second row':
                        case 'third column' && 'second row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'first column' && 'third row':
                        case 'second column' && 'third row':
                        case 'third column' && 'third row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'first column' && 'third row':
                        case 'second column' && 'second row':
                        case 'third column' && 'first row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                        case 'third column' && 'first row':
                        case 'second column' && 'second row':
                        case 'first column' && 'third row':
                            player1ProvisionalScore += 1;
                            if(player1ProvisionalScore === 3) {
                                playerOneScore+=1;
                                player1ProvisionalScore = 0;
                                currentPlayers[0].totalMoves = [];
                                alert('Player One won this round!')
                            }
                            break;
                    }
                }
            }
            if(playerTwoMoves.length === 3) {
                for(let [ele] of playerTwoMoves) {
                    let [a, b] = ele;
                    switch(a && b) {
                        case 'first column' && 'first row':
                        case 'first column' && 'second row':
                        case 'first column' && 'third row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'second column' && 'first row':
                        case 'second column' && 'second row':
                        case 'second column' && 'third row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'third column' && 'first row':
                        case 'third column' && 'second row':
                        case 'third column' && 'third row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'first column' && 'first row':
                        case 'second column' && 'first row':
                        case 'third column' && 'first row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'first column' && 'second row':
                        case 'second column' && 'second row':
                        case 'third column' && 'second row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'first column' && 'third row':
                        case 'second column' && 'third row':
                        case 'third column' && 'third row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'first column' && 'third row':
                        case 'second column' && 'second row':
                        case 'third column' && 'first row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                        case 'third column' && 'first row':
                        case 'second column' && 'second row':
                        case 'first column' && 'third row':
                            player2ProvisionalScore += 1;
                            if(player2ProvisionalScore === 3) {
                                playerTwoScore+=1;
                                player2ProvisionalScore = 0;
                                currentPlayers[1].totalMoves = [];
                                alert('Player Two won this round!')
                            }
                            break;
                    }
                }
            }
            currentScore = `${playerOneScore} - ${playerTwoScore}`;
            console.log(currentScore);
        }
        return { 
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