const ticTacToe = (() => {
    let boardMoves = [];
    let playerTurn = {
        player1: 1,
        player2: 0
    }
    const gameboard = (() => {
        let board = [
            ['blank', 'first column', 'second column', 'third column'],
            ['blank', 'first row', 'second row', 'third row'],
        ];
        function makingMove (playerInputForColumn = 0, playerInputForRow = 0) {
            if(playerTurn.player1 === 1 && playerTurn.player2 === 0 && this.numberPlayer === 1 || playerTurn.player2 === 1 && playerTurn.player1 === 0 && this.numberPlayer === 2) {
                let resultedMove = [];
                resultedMove.push(board[0][playerInputForColumn]);
                resultedMove.push(board[1][playerInputForRow]);
                if(this.lastMove[0] === resultedMove[0] && this.lastMove[1] === resultedMove[1]) {
                    throw Error('You cannot make a repeated move');
                }
                console.log(resultedMove);
                this.totalMoves.push([resultedMove])
                this.lastMove = resultedMove.concat();
                if(this.numberPlayer === 1) {
                    playerTurn.player2 = 1;
                    playerTurn.player1 = 0;
                } else if(this.numberPlayer === 2) {
                    playerTurn.player1 = 1;
                    playerTurn.player2 = 0;
                }
            }
            else {
                alert("It is not this player's turn");
            }
        }
        return { makingMove };
    })()
    let currentPlayers = [];
    function createPlayer(name = '', numberPlayer = 0) {
        if(currentPlayers.length >= 2) {
            throw Error('There are already two created players')
        } else {
            const { makingMove } = gameboard;
            let uid = crypto.randomUUID();
            let totalMoves = [];
            let lastMove = [];
            const player = {
                name,
                numberPlayer,
                makingMove,
                uid,
                totalMoves,
                lastMove,
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
            console.log(playerTwoMoves);
            player1ProvisionalScore = 0;
            player2ProvisionalScore = 0;
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
        function getWinner() {
            if(playerOneScore >= 3) {
                alert(`Player one won the game. Player one won ${playerOneScore} times`)
            }
            if(playerTwoScore >= 3) {
                alert(`Player two won the game. Player two won ${playerTwoScore} times`)
            }
        }
        function getTurn() {
            if(playerTurn.player1 === 1 && playerTurn.player2 === 0) {
                return "It is player 1 turn"
            } else if(playerTurn.player2 === 1 && playerTurn.player1 === 0) {
                return "It is player 2 turn"
            }
        }
        return { 
            getWinner,
            getTheCurrentScore,
            setTheCurrentScore,
            getTurn
        }
    })()
    const firstCell = document.querySelector('#firstCell');
    const secondCell = document.querySelector('#secondCell');
    const thirdCell = document.querySelector('#thirdCell');
    const fourthCell = document.querySelector('#fourthCell');
    const fifthCell = document.querySelector('#fifthCell');
    const sixthCell = document.querySelector('#sixthCell');
    const seventhCell = document.querySelector('#seventhCell');
    const eigthCell = document.querySelector('#eigthCell');
    const ninethCell = document.querySelector('#ninethCell');
    firstCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(1, 1);
            firstCell.textContent = 'X';
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(1, 1);
            firstCell.textContent = 'O';
        }
    })
    secondCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(1, 2)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(1, 2)}
    })
    thirdCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(1, 3)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(1, 3)}
    })
    fourthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(2, 1)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(2, 1)}
    })
    fifthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(2, 2)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(2, 2)}
    })
    sixthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(2, 3)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(2, 3)}
    })
    seventhCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(3, 1)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(3, 1)}
    })
    eigthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(3, 2)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(3, 2)}
    })
    ninethCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {currentPlayers[0].makingMove(3, 3)}
        else if(playerTurn.player2 === 1) {currentPlayers[1].makingMove(3, 3)}
    })
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