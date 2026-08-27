const ticTacToe = (() => {
    let playerTurn = {
        player1: 0,
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
            if(currentPlayers.length <= 0) {alert('Create two players to start the game')};
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
            alert('There are already two created players')
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
            playerTurn.player1 = 1;
            numberPlayer === 1 ? paraPlayer1Title.textContent = name : paraPlayer2Title.textContent = name;
            numberPlayer === 1 ? paraPlayer1Point.textContent = 'Points: 0' : paraPlayer2Point.textContent = 'Points: 0';
        }
    }
    function resetPlayer() {
        currentPlayers.splice(0, 2);
        paraPlayer1Title.textContent = "Player1";
        paraPlayer2Title.textContent = "Player2";
    }
    function resetGame() {
        playerTurn.player1 = 0;
        playerTurn.player2 = 0;
        fiveRounds.player1.firstRound = 0;
        fiveRounds.player1.secondRound = 0;
        fiveRounds.player1.thirdRound = 0;
        fiveRounds.player1.fourthRound = 0;
        fiveRounds.player1.fifthRound = 0;
        fiveRounds.player2.firstRound = 0;
        fiveRounds.player2.secondRound = 0;
        fiveRounds.player2.thirdRound = 0;
        fiveRounds.player2.fourthRound = 0;
        fiveRounds.player2.fifthRound = 0;
        playerOneScore = 0;
        playerTwoScore = 0;
    }
    function modifyPlayer(name = '', playerNumber = 1) {
        if(playerNumber === 1) {
            currentPlayers[0].name = name;
            paraPlayer1Title.textContent = name;
        }
        else if(playerNumber === 2) {
            currentPlayers[1].name = name;
            paraPlayer2Title.textContent = name;
        }
        else {
            throw Error('Invalid input');
        }
    }
    let displayControl = (() => {
        let playerOneScore = 0;
        let playerTwoScore = 0;
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
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'second column,first row,second column,second row,second column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,first row,third column,second row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,first row,second column,first row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard()
                        setTurn();
                    break;
                    case 'first column,second row,second column,second row,third column,second row':
                        playerOneScore = 1;
                        trackVictories();
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,third row,second column,third row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,third row,second column,second row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,first row,second column,second row,first column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,third row,second column,second row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,first row,second column,second row,third column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,third row,first column,second row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'second column,third row,second column,second row,second column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,third row,third column,second row,third column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,second row,second column,second row,first column,second row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,third row,second column,third row,first column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'third column,first row,second column,first row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,second row,second column,first row,second column,second row,third column,second row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'second column,first row,first column,second row,second column,third row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
                    break;
                    case 'first column,second row,second column,second row,third column,third row,first column,first row':
                        playerOneScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].playerPoint += 1;
                        trackVictories();
                        alert('Player One won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                        setTurn();
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
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'second column,first row,second column,second row,second column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,first row,third column,second row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,first row,second column,first row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,second row,second column,second row,third column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,third row,second column,third row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,third row,second column,second row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,first row,second column,second row,first column,third row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,third row,second column,second row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,first row,second column,second row,third column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,third row,first column,second row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'second column,third row,second column,second row,second column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,third row,third column,second row,third column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,second row,second column,second row,first column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,third row,second column,third row,first column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'third column,first row,second column,first row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,second row,second column,first row,second column,second row,third column,second row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'second column,first row,first column,second row,second column,third row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                    case 'first column,second row,second column,second row,third column,third row,first column,first row':
                        playerTwoScore = 1;
                        currentPlayers[0].totalMoves = [];
                        currentPlayers[1].totalMoves = [];
                        currentPlayers[1].playerPoint += 1;
                        trackVictories();
                        alert('Player Two won this round!');
                        if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                        cleanBoard();
                    break;
                }
            if(player1Coordinates === 'second column,first row,second column,second row,third column,second row,first column,third row' &&
                player2Coordinates === 'second column,first row,second column,second row,third column,second row,first column,third row') 
                {
                    currentPlayers[0].totalMoves = [];
                    currentPlayers[1].totalMoves = [];
                    if(playerOneScore === 1 || playerTwoScore === 1) {playerOneScore = 0; playerTwoScore = 0;}
                    cleanBoard();
                    alert("It's a draw");
                                                        }
            }
            trackVictories();
        }
        function getWinner() {
            if(fiveRounds.player1.fifthRound === 1 && fiveRounds.player2.fifthRound === 0 || fiveRounds.player2.fifthRound === 1 && fiveRounds.player1.fifthRound === 0) {
                if(currentPlayers[0].playerPoint > currentPlayers[1].playerPoint) {
                    winnerDecla.textContent = `${currentPlayers[0].name} won the most rounds`;
                    winnerDecla.style.backgroundColor = "rgba(1, 4, 0, 0.765);"
                    winnerDecla.style.fontSize = "1.1rem";
                    fiveRoundsBar.appendChild(winnerDecla);
                }
                else if(currentPlayers[1].playerPoint > currentPlayers[0].playerPoint) {
                    winnerDecla.textContent = `${currentPlayers[1].name} won the most rounds`;
                    winnerDecla.style.backgroundColor = "rgba(1, 4, 0, 0.765);"
                    winnerDecla.style.fontSize = "1.1rem";
                    fiveRoundsBar.appendChild(winnerDecla);
                }
                else if(currentPlayers[0].playerPoint === currentPlayers[1].playerPoint) {
                    winnerDecla.textContent = `${currentPlayers[0].name} and ${currentPlayers[1].name} got the same amount of points`;
                    winnerDecla.style.backgroundColor = "rgba(1, 4, 0, 0.765);"
                    winnerDecla.style.fontSize = "1.1rem";
                    fiveRoundsBar.appendChild(winnerDecla);
                }
                
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
            if(firstCell.textContent !== '' &&
                secondCell.textContent !== '' &&
                thirdCell.textContent !== '' &&
                fourthCell.textContent !== '' &&
                fifthCell.textContent !== '' &&
                sixthCell.textContent !== '' &&
                seventhCell.textContent !== '' &&
                eigthCell.textContent !== '' &&
                ninethCell.textContent !== ''
            ) {
                if(playerOneScore === 0 && playerOneScore === 0) {
                    if(fiveRounds.player1.firstRound === 0 && fiveRounds.player2.firstRound === 0) {
                        firstRoundPara.textContent = "Draw";
                        cleanBoard();
                    } else if(fiveRounds.player1.secondRound === 0 && fiveRounds.player2.secondRound === 0) {
                        secondRoundPara.textContent = "Draw";
                        cleanBoard();
                    } else if(fiveRounds.player1.thirdRound === 0 && fiveRounds.player2.thirdRound === 0) {
                        thirdRoundPara.textContent = "Draw";
                        cleanBoard();
                    } else if(fiveRounds.player1.fourthRound === 0 && fiveRounds.player2.fourthRound === 0) {
                        fourthRoundPara.textContent = "Draw";
                        cleanBoard();
                    } else if(fiveRounds.player1.fifthRound === 0 && fiveRounds.player2.fifthRound === 0) {
                        fifthRoundPara.textContent = "Draw";
                        cleanBoard();
                    }
                }
            }
           if(playerOneScore === 1 && fiveRounds.player2.firstRound === 0 && currentPlayers[0].playerPoint === 1 && !firstRoundPara.textContent === 'Draw') {
                fiveRounds.player1.firstRound = 1;
                paraPlayer1Point.textContent = `Points: ${currentPlayers[0].playerPoint}`
                firstRoundPara.textContent = `${currentPlayers[0].name} won 1st round`; 
           }
           else if(playerTwoScore === 1 && fiveRounds.player1.firstRound === 0  && currentPlayers[1].playerPoint === 1 && !firstRoundPara.textContent === 'Draw') {
                fiveRounds.player2.firstRound = 1;
                paraPlayer2Point.textContent = `Points: ${currentPlayers[1].playerPoint}`
                firstRoundPara.textContent = `${currentPlayers[1].name} won 1st round`; 
           }
           if(playerOneScore === 1 && fiveRounds.player2.secondRound === 0 && currentPlayers[0].playerPoint === 2 && !secondRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.secondRound === 0 && currentPlayers[1].playerPoint === 1 && !secondRoundPara.textContent === 'Draw'||
                playerOneScore === 1 && fiveRounds.player2.secondRound === 0 && currentPlayers[0].playerPoint === 1 && currentPlayers[1].playerPoint === 1 && !secondRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player1.secondRound = 1;
                paraPlayer1Point.textContent = `Points: ${currentPlayers[0].playerPoint}`
                secondRoundPara.textContent = `${currentPlayers[0].name} won 2nd round`; 
           }
           else if(playerTwoScore === 1 && fiveRounds.player1.secondRound === 0 && currentPlayers[1].playerPoint === 2 && !secondRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.secondRound === 0 && currentPlayers[0].playerPoint === 1 && !secondRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.secondRound === 0 && currentPlayers[1].playerPoint === 1 && currentPlayers[0].playerPoint === 1 && !secondRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player2.secondRound = 1;
                paraPlayer2Point.textContent = `Points: ${currentPlayers[1].playerPoint}`
                secondRoundPara.textContent = `${currentPlayers[1].name} won 2nd round`; 
           }
           if(playerOneScore === 1 && fiveRounds.player2.thirdRound === 0 && currentPlayers[0].playerPoint === 3 && !thirdRoundPara.textContent === 'Draw'||
                playerOneScore === 1 && fiveRounds.player2.thirdRound === 0 && currentPlayers[1].playerPoint === 2 && currentPlayers[0].playerPoint === 1 && !thirdRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.thirdRound === 0 && currentPlayers[0].playerPoint === 2 && currentPlayers[1].playerPoint === 1 && !thirdRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player1.thirdRound = 1;
                paraPlayer1Point.textContent = `Points: ${currentPlayers[0].playerPoint}`
                thirdRoundPara.textContent = `${currentPlayers[0].name} won 3rd round`; 
           }
           else if(playerTwoScore === 1 && fiveRounds.player1.thirdRound === 0 && currentPlayers[1].playerPoint === 3 && !thirdRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.thirdRound === 0 && currentPlayers[0].playerPoint === 2 && currentPlayers[1].playerPoint === 1 && !thirdRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.thirdRound === 0 && currentPlayers[1].playerPoint === 2 && currentPlayers[0].playerPoint === 1 && !thirdRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player2.thirdRound = 1;
                paraPlayer2Point.textContent = `Points: ${currentPlayers[1].playerPoint}`
                thirdRoundPara.textContent = `${currentPlayers[1].name} won 3rd round`; 
           }
           if(playerOneScore === 1 && fiveRounds.player2.fourthRound === 0 && currentPlayers[0].playerPoint === 4 && !fourthRoundPara.textContent === 'Draw'||
                playerOneScore === 1 && fiveRounds.player2.fourthRound === 0 && currentPlayers[1].playerPoint === 2 && currentPlayers[0].playerPoint === 2 && !fourthRoundPara.textContent === 'Draw'||
                playerOneScore === 1 && fiveRounds.player2.fourthRound === 0 && currentPlayers[0].playerPoint === 3 && currentPlayers[1].playerPoint === 1 && !fourthRoundPara.textContent === 'Draw'||
                playerOneScore === 1 && fiveRounds.player2.fourthRound === 0 && currentPlayers[1].playerPoint === 3 && currentPlayers[0].playerPoint === 1 && !fourthRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player1.fourthRound = 1;
                paraPlayer1Point.textContent = `Points: ${currentPlayers[0].playerPoint}`
                fourthRoundPara.textContent = `${currentPlayers[0].name} won 4th round`; 
           }
           else if(playerTwoScore === 1 && fiveRounds.player1.fourthRound === 0 && currentPlayers[1].playerPoint === 4 && !fourthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fourthRound === 0 && currentPlayers[0].playerPoint === 2 && currentPlayers[1].playerPoint === 2 && !fourthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fourthRound === 0 && currentPlayers[1].playerPoint === 3 && currentPlayers[0].playerPoint === 1 && !fourthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fourthRound === 0 && currentPlayers[0].playerPoint === 3 && currentPlayers[1].playerPoint === 1 && !fourthRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player2.fourthRound = 1;
                paraPlayer2Point.textContent = `Points: ${currentPlayers[1].playerPoint}`
                fourthRoundPara.textContent = `${currentPlayers[1].name} won 4th round`; 
           }
           if(playerOneScore === 1 && fiveRounds.player2.fifthRound === 0 && currentPlayers[0].playerPoint === 5 && currentPlayers[1].playerPoint === 0 && !fifthRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.fifthRound === 0 && currentPlayers[1].playerPoint === 3 && currentPlayers[0].playerPoint === 2 && !fifthRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.fifthRound === 0 && currentPlayers[0].playerPoint === 3 && currentPlayers[1].playerPoint === 2 && !fifthRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.fifthRound === 0 && currentPlayers[1].playerPoint === 1 && currentPlayers[0].playerPoint === 4 && !fifthRoundPara.textContent === 'Draw' ||
                playerOneScore === 1 && fiveRounds.player2.fifthRound === 0 && currentPlayers[1].playerPoint === 4 && currentPlayers[0].playerPoint === 1 && !fifthRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player1.fifthRound = 1;
                paraPlayer1Point.textContent = `Points: ${currentPlayers[0].playerPoint}`
                fifthRoundPara.textContent = `${currentPlayers[0].name} won 5th round`; 
           }
           else if(playerTwoScore === 1 && fiveRounds.player1.fifthRound === 0 && currentPlayers[1].playerPoint === 5 && currentPlayers[0].playerPoint === 0 && !fifthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fifthRound === 0 && currentPlayers[0].playerPoint === 3 && currentPlayers[1].playerPoint === 2 && !fifthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fifthRound === 0 && currentPlayers[1].playerPoint === 3 && currentPlayers[0].playerPoint === 2 && !fifthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fifthRound === 0 && currentPlayers[0].playerPoint === 1 && currentPlayers[1].playerPoint === 4 && !fifthRoundPara.textContent === 'Draw' ||
                playerTwoScore === 1 && fiveRounds.player1.fifthRound === 0 && currentPlayers[0].playerPoint === 4 && currentPlayers[1].playerPoint === 1 && !fifthRoundPara.textContent === 'Draw'
           ) {
                fiveRounds.player2.fifthRound = 1;
                paraPlayer2Point.textContent = `Points: ${currentPlayers[1].playerPoint}`
                fifthRoundPara.textContent = `${currentPlayers[1].name} won 5th round`; 
           }
           getWinner();
        }
        return { 
            getWinner,
            setTheCurrentScore,
            getTurn,
            setTurn,
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
            if(firstCell.textContent === 'O' || firstCell.textContent === 'X') {alert('That square is already marked')}
            else {
            firstCell.textContent = 'X';
            firstCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(firstCell.textContent === 'X' || firstCell.textContent === 'O') {alert('That square is already marked')}
            else {
            firstCell.textContent = 'O';
            firstCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {firstCell.textContent = ''};
    })
    secondCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(secondCell.textContent === 'O' || secondCell.textContent === 'X') {alert('That square is already marked')}
            else {
            secondCell.textContent = 'X';
            secondCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(secondCell.textContent === 'X' || secondCell.textContent === 'O') {alert('That square is already marked')}
            else {
            secondCell.textContent = 'O';
            secondCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {secondCell.textContent = ''};
    })
    thirdCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(thirdCell.textContent === 'O' || thirdCell.textContent === 'X') {alert('That square is already marked')}
            else {
            thirdCell.textContent = 'X';
            thirdCell.style.color = 'red';
            currentPlayers[0].makingMove(1, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(thirdCell.textContent === 'X' || thirdCell.textContent === 'O') {alert('That square is already marked')}
            else {
            thirdCell.textContent = 'O';
            thirdCell.style.color = 'green';
            currentPlayers[1].makingMove(1, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {thirdCell.textContent = ''};
    })
    fourthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(fourthCell.textContent === 'O' || fourthCell.textContent === 'X') {alert('That square is already marked')}
            else {
            fourthCell.textContent = 'X';
            fourthCell.style.color = 'red';
            currentPlayers[0].makingMove(2, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(fourthCell.textContent === 'X' || fourthCell.textContent === 'X') {alert('That square is already marked')}
            else {
            fourthCell.textContent = 'O';
            fourthCell.style.color = 'green';
            currentPlayers[1].makingMove(2, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {fourthCell.textContent = ''};
    })
    fifthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(fifthCell.textContent === 'O' || fifthCell.textContent === 'X') {alert('That square is already marked')}
            else {
            fifthCell.textContent = 'X';
            fifthCell.style.color = 'red';
            currentPlayers[0].makingMove(2, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(fifthCell.textContent === 'X' || fifthCell.textContent === 'O') {alert('That square is already marked')}
            else {
            fifthCell.textContent = 'O';
            fifthCell.style.color = 'green';
            currentPlayers[1].makingMove(2, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {fifthCell.textContent = ''};
    })
    sixthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(sixthCell.textContent === 'O' || sixthCell.textContent === 'X') {alert('That square is already marked')}
            else {
            sixthCell.textContent = 'X';
            sixthCell.style.color = 'red';            
            currentPlayers[0].makingMove(2, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(sixthCell.textContent === 'X' || sixthCell.textContent === 'O') {alert('That square is already marked')}
            else {
            sixthCell.textContent = 'O';
            sixthCell.style.color = 'green';            
            currentPlayers[1].makingMove(2, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {sixthCell.textContent = ''};
    })
    seventhCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(seventhCell.textContent === 'O' || seventhCell.textContent === 'X') {alert('That square is already marked')}
            else {
            seventhCell.textContent = 'X';
            seventhCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(seventhCell.textContent === 'X' || seventhCell.textContent === 'O') {alert('That square is already marked')}
            else {
            seventhCell.textContent = 'O';
            seventhCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 1);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {seventhCell.textContent = ''};
    })
    eigthCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(eigthCell.textContent === 'O' || eigthCell.textContent === 'X') {alert('That square is already marked')}
            else {
            eigthCell.textContent = 'X';
            eigthCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(eigthCell.textContent === 'X'|| eigthCell.textContent === 'O') {alert('That square is already marked')}
            else {
            eigthCell.textContent = 'O';
            eigthCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 2);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {eigthCell.textContent = ''};
    })
    ninethCell.addEventListener('click', () => {
        if(playerTurn.player1 === 1) {
            if(ninethCell.textContent === 'O' || ninethCell.textContent === 'X') {alert('That square is already marked')}
            else {
            ninethCell.textContent = 'X';
            ninethCell.style.color = 'red';
            currentPlayers[0].makingMove(3, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        else if(playerTurn.player2 === 1) {
            if(ninethCell.textContent === 'X' || ninethCell.textContent === 'O') {alert('That square is already marked')}
            else {
            ninethCell.textContent = 'O';
            ninethCell.style.color = 'green';
            currentPlayers[1].makingMove(3, 3);
            displayControl.setTheCurrentScore();
            displayControl.setTurn();
            }
        }
        if(fiveRounds.player1.fifthRound === 1 || fiveRounds.player2.fifthRound === 1) {ninethCell.textContent = ''};
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
    const createPlayerBtn = document.querySelector("#createPlayerBtn");
    const modifyPlayerBtn = document.querySelector("#modifyPlayerBtn");
    const restartGameBtn = document.querySelector("#restartGameBtn");
    const dialogCreatePlayer = document.querySelector("#createPlayerDialog");
    const dialogModifyPlayer = document.querySelector("#modifyPlayerDialog");
    const closeBtn = document.querySelectorAll(".closeBtn");
    const fiveRoundsBar = document.querySelector("#fiveRounds");
    let winnerDecla = document.createElement('p');
    createPlayerBtn.addEventListener("click", () => {
        dialogCreatePlayer.showModal();
    })
    modifyPlayerBtn.addEventListener("click", () => {
        dialogModifyPlayer.showModal();
    })
    restartGameBtn.addEventListener("click", () => {
        resetPlayer();
        resetGame();
        paraPlayer1Point.textContent = 'Points: -';
        paraPlayer2Point.textContent = 'Points: -';
        fiveRounds.player1.firstRound = 0;
        fiveRounds.player1.secondRound = 0;
        fiveRounds.player1.thirdRound = 0;
        fiveRounds.player1.fourthRound = 0;
        fiveRounds.player1.fifthRound = 0;
        fiveRounds.player2.firstRound = 0;
        fiveRounds.player2.secondRound = 0;
        fiveRounds.player2.thirdRound = 0;
        fiveRounds.player2.fourthRound = 0;
        fiveRounds.player2.fifthRound = 0;
        firstRoundPara.textContent = "-";
        secondRoundPara.textContent = "-";
        thirdRoundPara.textContent = "-";
        fourthRoundPara.textContent = "-";
        fifthRoundPara.textContent = "-";
        fiveRoundsBar.removeChild(winnerDecla);
    })
    closeBtn.forEach((btn) => btn.addEventListener("click", () => {
        dialogCreatePlayer.close();
        dialogModifyPlayer.close();
    }))
    let paraPlayer1Point = document.querySelector("#player1PointParagraph");
    let paraPlayer2Point = document.querySelector("#player2PointParagraph");
    let paraPlayer1Title = document.querySelector("#paraPlayer1Title");
    let paraPlayer2Title = document.querySelector("#paraPlayer2Title");
    let firstRoundPara = document.querySelector("#firstRound");
    let secondRoundPara = document.querySelector("#secondRound");
    let thirdRoundPara = document.querySelector("#thirdRound");
    let fourthRoundPara = document.querySelector("#fourthRound");
    let fifthRoundPara = document.querySelector("#fifthRound");
    const submitBtnCreation = document.querySelector("#submitBtnCreate");
    const submitBtnModification = document.querySelector("#submitBtnModify");
    let inputName = document.querySelector("#playerName");
    let inputRadio1 = document.querySelector("#playerOne");
    let inputRadio2 = document.querySelector("#playerTwo");
    let inputNameModify = document.querySelector("#playerNameModify");
    let inputRadio1Modify = document.querySelector("#playerOneModify");
    submitBtnModification.form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        inputRadio1Modify.checked === true ? modifyPlayer(inputNameModify.value, 1) : modifyPlayer(inputNameModify.value, 2);
        dialogModifyPlayer.close();
    })
    submitBtnCreation.form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        valindatingPlayerCreation();
    })
    function valindatingPlayerCreation() {
        if(currentPlayers.length > 0) {
            if(currentPlayers.length === 1 && inputRadio1.checked) {
                alert('Player already created');
            }
            else if(currentPlayers.length === 1 && inputRadio2.checked) {
                createPlayer(inputName.value, 2);
                dialogCreatePlayer.close();
            }
            else if(currentPlayers.length === 2) {
                alert('There are already two players created');
                dialogCreatePlayer.close();
            }

        }
        else {
            if(inputRadio1.checked) {
                createPlayer(inputName.value, 1);
                dialogCreatePlayer.close();
            } 
            else if(inputRadio2.checked) {
                createPlayer(inputName.value, 2);
                dialogCreatePlayer.close();
            }
        }
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
