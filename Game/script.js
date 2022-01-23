let board = [];
let players = [];
let playerTurn = 0;
let difficulty = 0;

let rowBtns = 0;

let easyBoard = document.getElementById('gameBoardEasy');
let mediumBoard = document.getElementById('gameBoardMedium');
let hardBoard = document.getElementById('gameBoardHard');

let easyBtn = document.getElementById("easyBtn");
let mediumBtn = document.getElementById("medBtn");
let hardBtn = document.getElementById("hardBtn");

let Start = () =>{

    rowBtns = difficulty.getElementsByClassName('rowBtns');

    easyBtn.disabled = true;
    mediumBtn.disabled = true;
    hardBtn.disabled = true;

    let rows = difficulty.getElementsByClassName('boardRows');
    let player1 = document.getElementById('player1Name').value;
    let player2 = document.getElementById('player2Name').value;

    players = [player1, player2];
    playerTurn = 0;
    EnableRowButtons();
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]}'s turn!`

    for (let row = 0; row < rows.length; row++){
        console.log(rows[row]);
        let rowDots = rows[row].getElementsByClassName('dot');

        board[row] = [];
        for (let dot = 0; dot < rowDots.length; dot++){
            board[row][dot] = rowDots[dot];
            board[row][dot].style.visibility = 'visible';
            //console.log(board[row][dot]);
        }
    }
}

let RemoveDot = (row, evt) => {
    let dotsLeft = board[row].length

    if (dotsLeft == 1){
        board[row][dotsLeft - 1].style.visibility = 'hidden';
        board[row] = 0;
        
        evt.disabled = true;
        evt.isEmpty = true;

        CheckWin();
    }
    else if (dotsLeft > 0){
        board[row][dotsLeft - 1].style.visibility = 'hidden';
        board[row].pop();
    }

    for (btn in rowBtns){
        if (rowBtns[btn] != evt){
            rowBtns[btn].disabled = true;
        }
    }
}

let NextTurn = () => {
    for (btn in rowBtns){
        if (rowBtns[btn].isEmpty != true)
            rowBtns[btn].disabled = false;
    }
    if(playerTurn == 0){
        playerTurn++;
    } else{
        playerTurn--;
    }

    // says who turn it is
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]}'s turn!`
}

let CheckWin = () => {
    for (row in board){
        if (board[row] != 0){
            return;
        }
    }
    NextTurn();

    easyBtn.disabled = false;
    mediumBtn.disabled = false;
    hardBtn.disabled = false;
    // declare winner
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]} won!`
}

let EnableRowButtons = () =>{
    for (btn in rowBtns){
        rowBtns[btn].disabled = false;
    }
}

let SetDifficulty = (button) => {
    let easyClick = document.getElementById("easyBtn");
    if (button == easyClick && easyBoard.style.display === "none") {
        easyBoard.style.display = "block";
        difficulty = easyBoard;
    } else {
        easyBoard.style.display = "none";
    }

    var medium = document.getElementById("gameBoardMedium");
    let mediumClick = document.getElementById("medBtn");
    if (button == mediumClick && mediumBoard.style.display === "none") {
        mediumBoard.style.display = "block";
        difficulty = mediumBoard;
    } else {
        mediumBoard.style.display = "none";
    }

    var hard = document.getElementById("gameBoardHard");
    let hardClick = document.getElementById("hardBtn");
    if (button == hardClick && hardBoard.style.display === "none") {
        hardBoard.style.display = "block";
        difficulty = hardBoard;
    } else {
        hardBoard.style.display = "none";
    }
}

easyBoard.style.display = "none";
mediumBoard.style.display = "none";
hardBoard.style.display = "none";