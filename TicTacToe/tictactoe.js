function startGame(){
	for (var i = 1; i <= 9; i++) {
		reset(i);
	}
	document.turn = "X";
	document.winner = null;
	setMessage(document.turn + " gets to start.");
}

function nextMove(square){
	if(document.winner != null){
		setMessage(document.winner + ' has already won.');
	} else if(square.innerText == ''){
		square.innerText = document.turn;
		switchTurn();
	} else {
		setMessage('Pick another square.');
	}
}

function setMessage(msg){
	document.getElementById('message').innerText = msg;
}

function switchTurn(){
	if(checkWinner(document.turn)){
		setMessage("The Winner is " + document.turn);
		document.winner = document.turn;
	} else if(document.turn == "X"){
		document.turn = "O";
		setMessage('It is ' + document.turn + ' turn.');
	} else {
		document.turn = "X";
		setMessage('It is ' + document.turn + ' turn.');
	}
}

function checkWinner(move){
	var result = false;
	if(checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)){
		result = true;
	}
	return result;
}

function checkRow(a, b, c, move){
	var result = false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
}

function getBox(number){
	return document.getElementById('s' + number).innerText;
}

function reset(number){
	document.getElementById('s' + number).innerText = '';
}