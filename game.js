(window.onload = function playMaze() {
	var boundaries = document.getElementsByClassName('boundary');
	var start = document.getElementById('start');
	var end = document.getElementById('end');
	var status = document.getElementById('status');
	var game = document.getElementById('game');
	var game_state = 2;
	var score = 0;

	boundaries[5].style.textAlign = 'center';

	start.addEventListener('mouseover', startGame);

	/*Game has 3 states: state 2 = the page just loaded or the game has been reset using the clickable E 
					 state 0 = game lost
					 state 1 = game won
	when the game first initiates (state 2) the user has to move his mouse over the "S" to start the game as instructed
	When the game starts event listeners are created, and the event that started the game on mouseover is stopped
	those events are: if the mouse moves over the boundaries the users loses
				  if the mouse moves outside of game block the user is warned and game is stopped
				  if the mouse reaches the E the user wins only if he doesn't touch the boundaries or gets out of bound. 
				  if the user wins or loses the game stops 
				  when the game stops the user has to click on S to start over or can click on E to end the game and reset the score (state 2)
				  S and E can't be spammed and are only clickable once, and they're only clickable if the user has won or lost
*/

	function startGame() {
		if (game_state == 0) {
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].classList.remove('youlose');
			}
			start.removeEventListener('click', startGame);
		}

		if (game_state == 1) {
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].style.backgroundColor = null;
			}
			start.removeEventListener('click', startGame);
		}

		if (game_state == 2) {
			start.removeEventListener('mouseover', startGame);
		}

		console.log('Game Started');
		status.innerText = 'Game Running ...';
		console.log(game_state);

		end.addEventListener('mouseover', winGame);

		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].addEventListener('mouseover', loseGame);
		}
		game.addEventListener('mouseleave', detectCheating);
	}

	function endGame() {
		score = 0;
		boundaries[5].innerText = null;
		status.innerText = 'Begin by moving your mouse over the "S"';
		console.log('Game Reset');

		if (game_state == 0) {
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].classList.remove('youlose');
			}
		} else if (game_state == 1) {
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].style.backgroundColor = null;
			}
		}
		game_state = 2;
		start.removeEventListener('click', startGame);
		end.removeEventListener('click', endGame);
		start.addEventListener('mouseover', startGame);
	}

	function detectCheating() {
		console.log('Cheating Detected ...');
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].classList.add('youlose');
		}
		game_state = 0;
		status.innerText = 'Out of Bounds! click on "S" to play again';

		end.removeEventListener('mouseover', winGame);
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		game.removeEventListener('mouseleave', detectCheating);

		start.addEventListener('click', startGame);
		end.addEventListener('click', endGame);
	}

	function winGame() {
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].style.backgroundColor = '#88ff88';
		}
		console.log('You Won!!');
		game_state = 1;
		score += 5;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You Won! click on "S" to play again';

		end.removeEventListener('mouseover', winGame);
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		game.removeEventListener('mouseleave', detectCheating);

		start.addEventListener('click', startGame);
		end.addEventListener('click', endGame);
	}

	function loseGame() {
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].classList.add('youlose');
		}
		console.log('You Lost!!');
		game_state = 0;
		score -= 10;
		boundaries[5].innerText = score;
		console.log(game_state);
		status.innerText = 'You Lost! click on "S" to play again';

		for (i = 0; i < boundaries.length; i++) {
			boundaries[i].removeEventListener('mouseover', loseGame);
		}
		end.removeEventListener('mouseover', winGame);
		game.removeEventListener('mouseleave', detectCheating);

		start.addEventListener('click', startGame);
		end.addEventListener('click', endGame);
	}
}),
	true;
