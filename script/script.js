const ticTacToe = (() => {
    let boardMoves = [];
    let player1ProvisionalScore = 0;
    let player2ProvisionalScore = 0;
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
            let playerOneMove = currentPlayers[0].lastMove.concat();
            console.log(playerOneMove);
            let playerTwoMove = currentPlayers[1].lastMove.concat();
            console.log(playerTwoMove);
            console.log(player1ProvisionalScore);
            let a;
            let b;
            [a, b] = playerOneMove;
            let c;
            let d;
            [c, d] = playerTwoMove;
            console.log(a);
            console.log(b);
            console.log(playerTurn.player1)
            if(playerTurn.player1 === 1) {
                console.log('shit');
                switch(a && b) {
                    case 'first column' && 'first row':
                    case 'first column' && 'second row':
                    case 'first column' && 'third row':
                        player1ProvisionalScore += 1;
                        console.log(player1ProvisionalScore);
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
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
                        if(player1ProvisionalScore >= 3 && currentPlayers[0].totalMoves.length >= 3) {
                            playerOneScore+=1;
                            player1ProvisionalScore = 0;
                            currentPlayers[0].totalMoves = [];
                            alert('Player One won this round!')
                        }
                        break;
                }
            }
            else if(playerTurn.player2 === 1) {
                switch(c && d) {
                    case 'first column' && 'first row':
                    case 'first column' && 'second row':
                    case 'first column' && 'third row':
                        player2ProvisionalScore += 1;
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
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
                        if(player2ProvisionalScore >= 3 && currentPlayers[1].totalMoves.length >= 3) {
                            playerTwoScore+=1;
                            player2ProvisionalScore = 0;
                            currentPlayers[1].totalMoves = [];
                            alert('Player Two won this round!')
                        }
                        break;
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
        function setTurn() {
            if(playerTurn.player1 === 1) {
                playerTurn.player1 = 0;
                playerTurn.player2 = 1;
            } else if(playerTurn.player2 === 1) {
                playerTurn.player2 = 0;
                playerTurn.player1 = 1;
            }
        }
        return { 
            getWinner,
            getTheCurrentScore,
            setTheCurrentScore,
            getTurn,
            setTurn
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
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(1, 1);
            firstCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    secondCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(1, 2);
            secondCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(1, 2);
            secondCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    thirdCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(1, 3);
            thirdCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(1, 3);
            thirdCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    fourthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(2, 1);
            fourthCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(2, 1);
            fourthCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    fifthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(2, 2);
            fifthCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(2, 2);
            fifthCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    sixthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(2, 3);
            sixthCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(2, 3);
            sixthCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    seventhCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(3, 1);
            seventhCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(3, 1);
            seventhCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    eigthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(3, 2);
            eigthCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(3, 2);
            eigthCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
    })
    ninethCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            currentPlayers[0].makingMove(3, 3);
            ninethCell.textContent = 'X';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
        else if(playerTurn.player2 === 1) {
            currentPlayers[1].makingMove(3, 3);
            ninethCell.textContent = 'O';
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
        }
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