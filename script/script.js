const ticTacToe = (() => {
    let boardMoves = [];
    let playerTurn = {
        player1: 1,
        player2: 0
    }
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let fiveRounds = {
            player1: {
                firstRound: 0,
                secondRound: 0,
                thirdRound: 0,
                fourthRound: 0,
                fifthRound: 0
            },
            player2: {
                firstRound: 0,
                secondRound: 0,
                thirdRound: 0,
                fourthRound: 0,
                fifthRound: 0
            }
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
                this.totalMoves.push([resultedMove])
                this.lastMove = resultedMove.concat();
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
            let playerPoint = 0;
            const player = {
                name,
                numberPlayer,
                makingMove,
                uid,
                totalMoves,
                lastMove,
                playerPoint
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
            let player1Coordinates;
            let player2Coordinates;
            player1Coordinates = currentPlayers[0].totalMoves.join(',');
            player2Coordinates = currentPlayers[1].totalMoves.join(',');
            console.log(player2Coordinates);
            if(playerTurn.player1 === 1 && playerTurn.player2 === 0) {
                switch(player1Coordinates) {
                    case 'first column,first row,first column,second row,first column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,first row,second column,second row,second column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,third column,second row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,first row,second column,first row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,second row,third column,second row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,second column,third row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,second column,second row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,second column,second row,first column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,second column,second row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,first row,second column,second row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,first column,second row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,third row,second column,second row,second column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,third column,second row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,second row,second column,second row,first column,second row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,second column,third row,first column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,second column,first row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,first row,second column,second row,third column,second row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,first row,first column,second row,second column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,second row,third column,third row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                }
            }
            else if(playerTurn.player2 === 1 && playerTurn.player1 === 0) {
                switch(player2Coordinates) {
                    case 'first column,first row,first column,second row,first column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,first row,second column,second row,second column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,third column,second row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,first row,second column,first row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,second row,third column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,second column,third row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,second column,second row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,second column,second row,first column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,second column,second row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,first row,second column,second row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,third row,first column,second row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,third row,second column,second row,second column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,third column,second row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,second row,second column,second row,first column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,third row,second column,third row,first column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'third column,first row,second column,first row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,first row,second column,second row,third column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'second column,first row,first column,second row,second column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                    case 'first column,second row,second column,second row,third column,third row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {cleanBoard();};
                    break;
                }
            }
            currentScore = `${playerOneScore} - ${playerTwoScore}`;
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
        function setTurn() {
            if(playerTurn.player1 === 1) {
                playerTurn.player1 = 0;
                playerTurn.player2 = 1;
            } else if(playerTurn.player2 === 1) {
                playerTurn.player2 = 0;
                playerTurn.player1 = 1;
            }
        }
        function trackVictories() {
            switch(playerOneScore) {
                case 1:

            }
        }
        return { 
            getWinner,
            getTheCurrentScore,
            setTheCurrentScore,
            getTurn,
            setTurn,
            trackVictories
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
            firstCell.textContent = 'X';
            firstCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            firstCell.textContent = 'O';
            firstCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    secondCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            secondCell.textContent = 'X';
            secondCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            secondCell.textContent = 'O';
            secondCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    thirdCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            thirdCell.textContent = 'X';
            thirdCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            thirdCell.textContent = 'O';
            thirdCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    fourthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            fourthCell.textContent = 'X';
            fourthCell.style.color = 'red';
            currentPlayers[0].makingMove(2, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            fourthCell.textContent = 'O';
            fourthCell.style.color = 'green';
            currentPlayers[1].makingMove(2, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    fifthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            fifthCell.textContent = 'X';
            fifthCell.style.color = 'red';
            currentPlayers[0].makingMove(2, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            fifthCell.textContent = 'O';
            fifthCell.style.color = 'green';
            currentPlayers[1].makingMove(2, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    sixthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            sixthCell.textContent = 'X';
            sixthCell.style.color = 'red';            
            currentPlayers[0].makingMove(2, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            sixthCell.textContent = 'O';
            sixthCell.style.color = 'green';            
            currentPlayers[1].makingMove(2, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    seventhCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            seventhCell.textContent = 'X';
            seventhCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            seventhCell.textContent = 'O';
            seventhCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    eigthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            eigthCell.textContent = 'X';
            eigthCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            eigthCell.textContent = 'O';
            eigthCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    ninethCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            ninethCell.textContent = 'X';
            ninethCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            ninethCell.textContent = 'O';
            ninethCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        resetProvisionalScore();
    })
    function cleanBoard() {
        firstCell.textContent = '';
        secondCell.textContent = '';
        thirdCell.textContent = '';
        fourthCell.textContent = '';
        fifthCell.textContent = '';
        sixthCell.textContent = '';
        seventhCell.textContent = '';
        eigthCell.textContent = '';
        ninethCell.textContent = '';
    }
    function resetProvisionalScore() {
        playerOneScore = 0;
        playerTwoScore = 0;
    }
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