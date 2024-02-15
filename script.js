let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const displayTurn = document.getElementById('turn');

function placeMarker(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            displayTurn.innerText = `${currentPlayer} wins!`;
            document.getElementById('board').classList.add('win-animation');
            gameActive = false;
        } else if (checkDraw()) {
            displayTurn.innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            displayTurn.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    displayTurn.innerText = `Player ${currentPlayer}'s turn`;
    document.getElementById('board').classList.remove('win-animation');
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
